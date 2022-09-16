const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {

// });
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

router.get('/availableTimes/:payload', (req, res) => {
  console.log('hopefully the number 1:', req.params.payload)
  const dummyData = req.params.payload;
  // Send back user object from the session (previously queried from the database)
  const query = `SELECT
    "user".id,
    "user".username,
    "days".id,
    "days".day,
    array_agg("availability".time_id) AS "availableTimes"
  FROM
    "availability"
    JOIN "user" ON "user".id = "availability".user_id
    JOIN "days" ON "days".id = "availability".days_id
  WHERE
    "availability".days_id = $1
  GROUP BY
    "user".id,
    "user".username,
    "days".day,
    "days".id;
;`;
  pool.query(query, [dummyData])
    .then(result => {
      console.log('result.rows on server side for route /availabileTimes:', result.rows) // this is coming back as each user id, their id, username, timezone, and available days.
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all users times', err);
      res.sendStatus(500)
    })
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
