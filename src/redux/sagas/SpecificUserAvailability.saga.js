import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* specificUserAvailabilitySAGA() {
    yield takeLatest('FETCH_SPECIFIC_USER_AVAILABILITY', fetchSpecificUserAvailability)
}

function* fetchSpecificUserAvailability(action) {
     console.log(`This is what you are sending to this SAGA: ACTION.PAYLOAD = ${action.payload.id}`)
     try {
        const response = yield axios.get(`/api/availability/${action.payload.id}`)
        yield put({
            type: 'SPECIFIC_USER_REDUCER',
            payload: response.data
        })
    }
    catch (error) {
        console.log('error in SAGA, this is what you were trying to send:', action.payload)
        console.error('error in SAGA', error)
    }
};

export default specificUserAvailabilitySAGA;
