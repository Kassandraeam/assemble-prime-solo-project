import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import availabilitySaga from './availability.saga';
import postAvailabilitySaga from './postAvailability.saga';
import deleteSaga from './Delete.saga';
import updateSaga from './updateTimezone.saga';
import fetchAllUsersSaga from './multipleUsers.saga';
import specificUserAvailabilitySAGA from './SpecificUserAvailability.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(), 
    userSaga(),
    availabilitySaga(),       // GETS the times that the logged in User is available.
    postAvailabilitySaga(),   // POSTS the times that the User is available.
    deleteSaga(),             // DELETES a time that the User chooses.
    updateSaga(),             // UPDATES the User's timezone.
    fetchAllUsersSaga(),       // GETS all of the Users that have registered.
    specificUserAvailabilitySAGA()
  ]);
}
