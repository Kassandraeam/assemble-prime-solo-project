const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// * GETS the user's id, the day id, time id, and the zone that they're in, for all users.
router.get('/', (req, res) => {
  const query = `SELECT * FROM availability;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      ('ERROR: Get all available times', err);
      res.sendStatus(500)
    })

});

// * Duplicate from multipleUsers router 🤨
router.post('/', async (req, res) => {
  const client = await pool.connect();

  const availability = req.body.availability;
  // (availability)
  try {
    await client.query('BEGIN')
    await Promise.all(availability.map((available) => {
      const queryText = `INSERT INTO "availability" ("user_id", "days_id", "time_id", "urZone") VALUES($1, $2, $3, $4) RETURNING "id", "user_id", "days_id", "time_id", "urZone";`;
      const reqBody = [available.user, available.weekday, available.time, available.localHour];
      return client.query(queryText, reqBody);
    }));
    await client.query('COMMIT')
    res.sendStatus(201);
  } catch (error) {
    await client.query('ROLLBACK')
      ('Error POST /api/availability', error);
    res.sendStatus(500);
  } finally {
    client.release()
  }
});

// * GETS the information for a specific user, their user_id, days_id, time_id, username, day they chose, and time they chose.
router.get('/:id', (req, res) => {
  ('req.params.id: ', req.params.id)

  const queryText =
    `
      SELECT "availability".id, "user".id AS "user_id","availability".days_id, "availability".time_id, "user".username as "username", "days".day, "time".hour
      FROM "availability"
      JOIN "user" ON "user".id = "availability".user_id
      JOIN "days" ON "days".id = "availability".days_id
      JOIN "time" ON "time".id = "availability".time_id
      WHERE "user_id" = $1
      GROUP BY "availability".id, "user".id, "availability".days_id, "availability".time_id, "user".username, "days".day, "time".time, "time".hour
      ORDER BY "days".day ASC ,"availability".time_id ASC
  ;
  `;
  pool.query(queryText, [req.params.id])
    .then(result => {
      ('result in pool query', result)
      res.send(result.rows);
    })
    .catch(err => {
      ('ERROR: Get all available times', err);
      res.sendStatus(500)
    })

});

// * Deletes the day/time the user selects in their profile.
router.delete('/:id', (req, res) => {
  // ('DELETE ROUTER');
  queryText =
    ` DELETE FROM "availability"
      WHERE "id" = $1;`;
  pool.query(queryText, [req.params.id])
    .then(results => {
      res.sendStatus(200);
    })
    .catch(err => {
      ('err on DELETE ROUTE', err)
      res.sendStatus(500);
    })
})

// Gets rid of all the availability for the User.
router.delete('/deleteAll', (req, res) => {
  console.log('delete all route')
  console.log('over here hopefully',req.params.id);
  queryText =
    `DELETE FROM "availability" WHERE user_id = $1;`;
  pool.query(queryText, [req.params.id])
    .then(results => {
      res.sendStatus(200);
    })
    .catch(err => {
      ('err on DELETE ROUTE', err)
      res.sendStatus(500);
    })
})

module.exports = router;