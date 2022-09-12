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
    SELECT "user".id, "user".username, "user".timezone
    FROM "user";`;
    pool.query(query)
      .then(result => {
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
