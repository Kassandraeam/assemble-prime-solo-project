const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const queryText = `INSERT INTO "user" ("timeinUTC")
  VALUES ($1);
  `
  pool.query(queryText, [])
  .then(result => {
    res.sendStatus(201);
  })
  .catch(err => {
    res.sendStatus(500);
  })
});

module.exports = router;


// router.post('/', (req, res) => {
//     console.log(req.body);
//     // RETURNING "id" will give us back the id of the created movie
//     const insertMovieQuery = `
//     INSERT INTO "movies" ("title", "poster", "description")
//     VALUES ($1, $2, $3)
//     RETURNING "id";`
  
//     // FIRST QUERY MAKES MOVIE
//     pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
//       .then(result => {
//         console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
  
//         const createdMovieId = result.rows[0].id
  
//         // Now handle the genre reference
//         const insertMovieGenreQuery = `
//         INSERT INTO "movies_genres" ("movie_id", "genre_id")
//         VALUES  ($1, $2);
//         `
//         // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
//         pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
//           //Now that both are done, send back success!
//           res.sendStatus(201);
//         }).catch(err => {
//           // catch for second query
//           console.log(err);
//           res.sendStatus(500)
//         })
  
//         // Catch for first query
//       }).catch(err => {
//         console.log(err);
//         res.sendStatus(500)
//       })
//   })