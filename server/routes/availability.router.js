const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const query = `SELECT * FROM availability;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all available times', err);
      res.sendStatus(500)
    })

});

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   // POST route code here
// });

// router.post('/', (req, res) => {
//   // const user = req.body.user    //these are all hard coded
//   // const day = req.body.weekday      //these are all hard coded
//   // const time = req.body.time    //these are all hard coded
//   const user = req.body.availability[0].user    //these are all hard coded
//   const day = req.body.availability[0].weekday      //these are all hard coded
//   const time = req.body.availability[0].time    //these are all hard coded
//   console.log('req.body is:', req.body);
//   const queryText = `INSERT INTO "availability" ("user_id", "days_id", "time_id") VALUES($1, $2, $3) RETURNING "id", "user_id", "days_id", "time_id";`;
//   pool
//     .query(queryText, [user, day, time])
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.log('POST FAILED : ', err);
//       res.sendStatus(500);
//     });
// });
// module.exports = router;

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

module.exports = router;