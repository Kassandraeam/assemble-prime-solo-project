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

// TODO: STEP 6 - For this example, we want to GET everything from a table. So we match the CRUD request on line 13 of the Saga. In this case it's a GET. The information that we get from the database we send back as result.rows TO our Saga. Go back to the Saga.

// ? Want to GET everything?
router.get('/', (req, res) => {

  const queryText = `This is where your SQL query from Postico will go.`;
  
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR in router.get on server side', err);
      res.sendStatus(500)
    })

});

// ? Want to GET something specific?
router.get('/:id', (req, res) => {
  // ? Where do we get req.params.id ? 
  // * 
  console.log(req.params.id) 

  const queryText = `This is where your SQL commands from Postico will go.`;
  const id = [req.params.id]

  pool.query(queryText, id)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR in router.get on server side', err);
      res.sendStatus(500)
    })

});

module.exports = router;