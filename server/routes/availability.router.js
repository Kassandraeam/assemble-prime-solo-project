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