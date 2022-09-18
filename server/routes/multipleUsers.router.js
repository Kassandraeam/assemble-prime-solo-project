const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {

// });

// !!!! DO NOT GET RID OF THIS !!!!!!
router.get('/', (req, res) => {
  // Send back user object from the session (previously queried from the database)
  const query = `
    SELECT "user".id, "user".username, "user".timezone, array_agg("availability".days_id) "availableDays"
    FROM "user"
    JOIN "availability" ON "user".id = "availability".user_id
    GROUP BY "user".id, "user".username, "user".timezone
;`;
  pool.query(query)
    .then(result => {
      console.log('result.rows on server side:', result.rows) // this is coming back as each user id, their id, username, timezone, and available days.
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all users times', err);
      res.sendStatus(500)
    })
});

// router.get('/', (req, res) => {
//   // Send back user object from the session (previously queried from the database)
//   const query = `SELECT
// 	"user".id,
// 	"user".username,
// 	"days".id AS dayID,
// 	"days".day,
// 	array_agg("availability".time_id) AS "availableTimes"
// FROM
// 	"availability"
// 	JOIN "user" ON "user".id = "availability".user_id
// 	JOIN "days" ON "days".id = "availability".days_id
// GROUP BY
// 	"user".id,
// 	"user".username,
// 	"days".day,
// 	"days".id;`;
//   pool.query(query)
//     .then(result => {
//       console.log('result.rows on server side:', result.rows) // this is coming back as each user id, their id, username, timezone, and available days.
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get all users times', err);
//       res.sendStatus(500)
//     })
// });


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
    console.log('Error POST /api/availability', error);
    res.sendStatus(500);
  } finally {
    client.release()
  }
});


// ! ASK LIZ
// ? I'm doing it this way because I need to make multiple SQL queries in a row and the way I've done that before is by doing an async query. If I do it the usual GET way, I only get response.data back for the last insertion, in this case, typically 3.
// router.post('/availableTimes', async (req, res) => {
//   console.log('REQ.BODY MAKE NOTE OF:', req.body); // [ 1, 2, 3 ]
//   const client = await pool.connect();
//   const commonDays = req.body.day;
//   console.log('CommonDays in the server post route',commonDays);
//   // figure out what is in commonDays and the format.
//   try {
//     await client.query('BEGIN')
//     // maybe I can run a for of loop on commonDays?
//     await Promise.all(commonDays.map((day) => {
//       const queryText = `SELECT
//       "user".id,
//       "user".username,
//       "days".id,
//       "days".day,
//       array_agg("availability".time_id) AS "availableTimes"
//     FROM
//       "availability"
//       JOIN "user" ON "user".id = "availability".user_id
//       JOIN "days" ON "days".id = "availability".days_id
//     WHERE
//       "availability".days_id = $1
//     GROUP BY
//       "user".id,
//       "user".username,
//       "days".day,
//       "days".id;
//   ;`;
//       console.log('day in the server', day)
//       return client.query(queryText, [day])
//     }));
//     await client.query('COMMIT')
//     res.sendStatus(201);
//   } catch (error) {
//     await client.query('ROLLBACK');
//     console.log('Error POST /api/availability', error);
//     res.sendStatus(500);
//   } finally {
//     client.release();
//   }
// })

// router.post('/availableTimes', async (req, res) => {
//   console.error(req.body);
//   console.error('PAYLOAD BABEYYYYY', req.body.day)
//   const dummyData = req.body.day;
//   console.error('DUMMY DATA YOU DUMMY:', dummyData);
//   // Send back user object from the session (previously queried from the database)
//   const query = `SELECT
// 	"user".id,
// 	"user".username,
// 	"days".id AS dayID,
// 	"days".day,
// 	array_agg("availability".time_id) AS "availableTimes"
// FROM
// 	"availability"
// 	JOIN "user" ON "user".id = "availability".user_id
// 	JOIN "days" ON "days".id = "availability".days_id
// WHERE
// 	"availability".days_id = $1
// GROUP BY
// 	"user".id,
// 	"user".username,
// 	"days".day,
// 	"days".id;`;
//   pool.query(query, [dummyData])
//     .then(result => {
//       console.log('result.rows on server side for route /availableTimes:', result.rows) // this is coming back as each user id, their id, username, timezone, and available days.
//       // Do I wanna map through result.rows before I send it over?
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('dummy data you dummy', dummyData);

//       console.log('ERROR: Get all users times', err);
//       res.sendStatus(500)
//     })
// });

router.post('/availableTimes', async (req, res) => {
  console.error(req.body);
  console.error('PAYLOAD BABEYYYYY', req.body.day)
  const dummyData = req.body.day;
  console.error('DUMMY DATA YOU DUMMY:', dummyData);
  // Send back user object from the session (previously queried from the database)
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
      console.log('result.rows on server side for route /availableTimes:', result.rows) // this is coming back as each user id, their id, username, timezone, and available days.
      // Do I wanna map through result.rows before I send it over?
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
