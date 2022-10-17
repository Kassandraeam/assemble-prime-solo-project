const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// * GETS all of the currently registered users and returns their id, username, timezone, and availableDays.
router.get('/', (req, res) => {
  const query = `
    SELECT "user".id, "user".username, "user".timezone, array_agg("availability".days_id) "availableDays"
    FROM "user"
    JOIN "availability" ON "user".id = "availability".user_id
    GROUP BY "user".id, "user".username, "user".timezone
;`;
  pool.query(query)
    .then(result => {
      console.log('result.rows on server side:', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      ('ERROR: Get all users times', err);
      res.sendStatus(500)
    })
});

// * POSTS all of the checkboxes that the user chose on the calendar.
router.post('/', async (req, res) => {
  const client = await pool.connect();
  const availability = req.body.availability;
  console.log(availability)
  try {
    await client.query('BEGIN')

    await Promise.all(availability.map((available) => {
      const queryText = `INSERT INTO "availability" ("user_id", "days_id", "time_id") VALUES($1, $2, $3) RETURNING "id", "user_id", "days_id", "time_id";`;
      const reqBody = [available.user, available.weekday, available.time];
      return client.query(queryText, reqBody);
    }));

    await client.query('COMMIT')
    res.sendStatus(201);

  } catch (error) {
    await client.query('ROLLBACK')
    // ('Error POST /api/availability', error);
    res.sendStatus(500);
  } finally {
    client.release()
  }
});

// * GETS the user.id, username, user timezone, and an array of the times that they have available, based on the day
router.post('/availableTimes', async (req, res) => {
  console.log(req.body);
  console.log('PAYLOAD BABEYYYYY', req.body.day)
  const dummyData = req.body.day;
  console.log('DUMMY DATA YOU DUMMY:', dummyData);
  const query = `
  SELECT 
	"user".id, "user".username, 
	"user".timezone, 
	array_agg("availability".time_id) as TIME,
	"days".day
  FROM 
  "user"
	JOIN "availability" ON "user".id = "availability".user_id
  JOIN "days" ON "days".id = "availability".days_id
  WHERE
  "availability".days_id = $1
  GROUP BY 
  	 "user".id, "user".username, "user".timezone, "days".day;`;
  pool.query(query, [dummyData])
    .then(result => {
      console.log('result.rows on server side for route /availableTimes:', result.rows)
      console.log('SENDING RESULT.ROWS TO REDUCER', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('dummy data you dummy', dummyData);

      console.log('ERROR: Get all users times', err);
      res.sendStatus(500)
    })
});

module.exports = router;
