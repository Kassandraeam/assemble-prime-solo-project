const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
    const query = `SELECT * FROM availability`;
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
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
