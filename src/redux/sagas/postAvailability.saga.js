import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postAvailabilitySaga() {
    yield takeLatest('POST_AVAILABILITY', postAvailability)
}

function* postAvailability(action) {
    try {
        yield axios.post('/api/availability', action.payload)
        yield put({
            type: 'POST_TO_AVAILABILITY_REDUCER',
            payload: action.payload
        })
    }
    catch (error) {
        console.log(action.payload)
        console.error('error in postAvailabilitySaga')
    }
};

export default postAvailabilitySaga;
