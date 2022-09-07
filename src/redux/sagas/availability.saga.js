import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* availabilitySaga() {
    yield takeLatest('FETCH_AVAILABILITY', fetchAvailability)
}

function* fetchAvailability() {
    try {
        const response = yield axios.get('/api/availability')

        yield put({
            type: 'CALL_TO_REDUCER',
            payload: response.data
        })
    }
    catch (error) {
        console.error('error in fetchAvailability Saga')
    }
};

export default availabilitySaga;