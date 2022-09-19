const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// TODO: STEP 5 - This is where you'll 'talk' to the Database via queries. Go down to line 35 for this example.
/*
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});


/*
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

/*
* PUT route template 
*/
router.put('/', (req, res) => {
  // PUT route code here
})

/*
* DELETE route template 
*/
router.delete('/', (req, res) => {
  // DELETE route code here
})

router.get('/', (req, res) => {
  const queryText = `This is where your SQL query from Postico will go.`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      ('ERROR in router.get on server side', err);
      res.sendStatus(500)
    })

});

router.get('/:id', (req, res) => {
  (req.params.id)

  const queryText = `This is where your SQL commands from Postico will go.`;
  const id = [req.params.id]

  pool.query(queryText, id)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      ('ERROR in router.get on server side', err);
      res.sendStatus(500)
    })

});

module.exports = router;