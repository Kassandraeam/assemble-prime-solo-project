// * GET * //

import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllUsersSaga() {
    yield takeLatest('FETCH_ALL_USERS', fetchAllUsers);
    yield takeLatest('GET_AVAILABLE_TIMES', fetchAllAvailableTimes);
}

function* fetchAllUsers(action) {
    try {
        console.log('fetch all users saga')
        const response = yield axios.get('/api/multipleUsers')
        console.log(response.data);
        yield put({
            type: 'ALL_USERS',
            payload: response.data
        })
    }
    catch (error) {
        console.log('action.payload in multipleUsersSaga:', action.payload)
        console.error('ERROR IN MULTIPLE USERS SAGA')
    }
};

function* fetchAllAvailableTimes(action) {
    try {
        console.log(`fetchAllAvailableTimes payload recieved:', ${action.payload}`)
        // payload recieved, now send it to the router /availableTimes
        const response = yield axios.get(`/api/multipleUsers/availableTimes/${action.payload}`)
        console.log(response.data)
        // need to dispatch this information to a reducer.
    }
    catch (error) {
        console.log(`action.payload in multipleUsersSaga/fetchAllAvailableTimes function: ${action.payload}`)
        console.error('error in multipleUsersSaga/fetchAllAvailableTimes function saga:', error)
    }
}

export default fetchAllUsersSaga;