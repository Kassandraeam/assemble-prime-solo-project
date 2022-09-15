const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
// TODO: STEP 4 - Now go to the Routes folder, and open template.router.js.
const routeYouWillGoTo = require('./routes/template.router'); 
const userRouter = require('./routes/user.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
// TODO: STEP 3 - This file path here needs to match your axios request in your SAGA. When you make your GET request, it comes here and looks for the path that you've provided in the GET. Once it finds it, it runs the Route. In this case, it goes to line 12.
app.use('/This_Should_Match_Between_The_Saga_And_Server', routeYouWillGoTo)
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
