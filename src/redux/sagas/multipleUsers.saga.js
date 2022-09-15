// * GET * //
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllUsersSaga() {
    yield takeLatest('FETCH_ALL_USERS', fetchAllUsers)
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

export default fetchAllUsersSaga;