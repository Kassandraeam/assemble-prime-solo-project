// * GET * //
import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchAllUsersSaga() {
    yield takeLatest('FETCH_ALL_USERS', fetchAllUsers);
    yield takeEvery('GET_AVAILABLE_TIMES', fetchAllAvailableTimes);
}

function* fetchAllUsers(action) {
    try {
        //('fetch all users saga')
        const response = yield axios.get('/api/multipleUsers')

        //('fetchAllUsers saga in multipleUsers Saga, this is getting all the users:', response.data)
        yield put({
            type: 'ALL_USERS',
            payload: response.data
        })
    }
    catch (error) {
        //('action.payload in multipleUsersSaga:', action.payload)
        // ('ERROR IN MULTIPLE USERS SAGA', error)
    }
};


function* fetchAllAvailableTimes(action) {
    try {
        const response = yield axios.post('/api/multipleUsers/availableTimes', {day: action.payload.day})
        //('response data: with times based on what was shot to server:',response.data);
        yield put({
            type: 'ALL_USERS_FREE_TIME',
            payload: response.data
        })
    }
    catch (error) {
        // ('error in multipleUsersSaga/fetchAllAvailableTimes function saga:', error)
    }
}




export default fetchAllUsersSaga;

