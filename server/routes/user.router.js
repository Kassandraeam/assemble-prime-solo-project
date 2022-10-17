const { query } = require('express');
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated

// * Gets the id of the user, the username, and their timezone.
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted

// * Creates a new user
// * When the user registers, it posts their username, password, and timezone to the DB.
// * Returns 'Created'
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const timezone = req.body.timezone;

  const queryText = `INSERT INTO "user" (username, password, timezone)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, timezone])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      ('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// * clear all server session information about this user
// * Returns 'OK'
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

// * Updates the timezone of the user.
// * Returns 'OK'
router.put(`/`, (req, res) => {
  console.log('REQ.BODY IN THE PUT', req.body)
  const timezone = req.body.inputTimeZone;
  const user = req.body.user;
  const queryText = `
  UPDATE "user"
  SET "timezone" = $1
  WHERE "id" = $2;`
  pool.query(queryText, [timezone, user])
  .then (response => {
    res.sendStatus(200);
  }).catch(err => {
    (err);
    res.sendStatus(500);
  })
})

module.exports = router;
