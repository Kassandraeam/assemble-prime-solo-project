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

// function* fetchAllAvailableTimes(action) {
//     try {
//         console.error(action.payload);
//         // console.log('type of in fetchAllavailableTimes:', typeof(action.payload.day))
//         console.error('fetchAllAvailableTimes payload recieved:', {day: action.payload.day})
//         // payload recieved, now send it to the router /availableTimes
//         const response = yield axios.post('/api/multipleUsers/availableTimes', {day: action.payload.day})
//         console.log('response.data', response.data)
//         // yield put({
//         //     type: 'ALL_USERS',
//         //     payload: response.data
//         // })
//         // need to dispatch this information to a reducer.
//     }
//     catch (error) {
//         console.log(`action.payload in multipleUsersSaga/fetchAllAvailableTimes function: ${action.payload}`)
//         console.error('error in multipleUsersSaga/fetchAllAvailableTimes function saga:', error)
//     }
// }

function* fetchAllAvailableTimes(action) {
    try {
        console.error('fetchAvailableTimes in the multipleUsers.saga: ', {day: action.payload.day});
        yield axios.post('/api/multipleUsers/availableTimes', {day: action.payload.day})
        // console.error('fetchAllAvailableTimes payload recieved:', {day: action.payload.day})
        // const response = yield axios.post('/api/multipleUsers/availableTimes', {day: action.payload.day})
        // console.log('response.data', response.data)
        console.log('result in the fetchAllAvailableTimes sagaFunction:', result.data);
    }
    catch (error) {
        console.log(`action.payload in multipleUsersSaga/fetchAllAvailableTimes function: ${action.payload}`)
        console.error('error in multipleUsersSaga/fetchAllAvailableTimes function saga:', error)
    }
}

export default fetchAllUsersSaga;