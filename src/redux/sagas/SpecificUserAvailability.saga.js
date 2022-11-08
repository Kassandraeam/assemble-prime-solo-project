import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* specificUserAvailabilitySAGA() {
    yield takeLatest('FETCH_SPECIFIC_USER', fetchSpecificUserAvailability)
}

function* fetchSpecificUserAvailability(action) {
    console.log(`This is what you are sending to this SAGA: ACTION.PAYLOAD = ${action.id}`)
    try {
        const response = yield axios.get(`/api/availability/${action.id}`)
        yield put({
            type: 'SPECIFIC_USER_REDUCER',
            payload: response.data
        })
    }
    catch (error) {
        // ('error in SAGA, this is what you were trying to send:', action.payload)
        // ('error in SAGA', error)
    }
};

export default specificUserAvailabilitySAGA;
