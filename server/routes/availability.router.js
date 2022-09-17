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


router.get('/:id', (req, res) => {
  console.log('req.params.id: ', req.params.id)

  const queryText = 
  `
  SELECT "availability".id, "user".id AS "user_id","availability".days_id, "availability".time_id, "user".username as "username", "days".day, "time".hour, "user".timezone
  FROM "availability"
  JOIN "user" ON "user".id = "availability".user_id
  JOIN "days" ON "days".id = "availability".days_id
  JOIN "time" ON "time".id = "availability".time_id
  WHERE "user_id" = $1
  GROUP BY "availability".id, "user".id, "availability".days_id, "availability".time_id, "user".username, "days".day, "time".time, "time".hour, "user".timezone;
  `;
  pool.query(queryText, [req.params.id])
    .then(result => {
      console.log('result in pool query', result)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all available times', err);
      res.sendStatus(500)
    })

});


// router.get('/:id', (req, res) => {
//   console.log(req.params.id)
//   const query = `SELECT * FROM movies WHERE id = $1;`;
//   pool.query(query, [req.params.id])
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Get detail movies', err);
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
      const queryText = `INSERT INTO "availability" ("user_id", "days_id", "time_id", "localHour") VALUES($1, $2, $3, $4) RETURNING "id", "user_id", "days_id", "time_id", "localHour";`;
      const reqBody = [available.user, available.weekday, available.time, available.localHour];
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

router.delete('/:id', (req, res) => {
  console.log('DELETE ROUTER');
  console.log(req.params.id);

  queryText =
    ` DELETE FROM "availability"
      WHERE "id" = $1;`;
  pool.query (queryText, [req.params.id])
  .then(results => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.error('err on DELETE ROUTE', err)
    res.sendStatus(500);
  })
})


/*
router.delete('/:id', (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  queryText = `
    DELETE FROM "movies_genres"
    WHERE "movie_id" = $1;`;
  pool.query(queryText, [id])
  .then(results => {
    res.sendStatus(200)
  }).catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
})
*/
module.exports = router;