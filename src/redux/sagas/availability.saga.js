import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* availabilitySaga() {
    yield takeLatest('FETCH_AVAILABILITY', fetchAvailability)
}

function* fetchAvailability(action) {
    try {
        console.log('action.payload in availablily saga:', action.payload)
        const response = yield axios.get(`/api/availability/${action.payload}`)

        yield put({
            type: 'AVAILABLE_TIMES_FOR_USER',
            payload: response.data
        })
    }
    catch (error) {
        console.log('action.payload in availablily saga:', action.payload)
        console.error('error in fetchAvailability Saga')
    }
};

export default availabilitySaga;