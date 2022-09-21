// * POST * //

import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postAvailabilitySaga() {
    yield takeLatest('POST_AVAILABILITY', postAvailability)
}

function* postAvailability(action) {
    try {
        yield axios.post('/api/availability', action.payload)
        // ('action.payload in my postAvail saga',action.payload)
        yield put({
            type: 'POST_TO_AVAILABILITY_REDUCER',
            payload: action.payload
        })
    }
    catch (error) {
        // ('error in postAvailSaga',action.payload)
        // ('error in postAvailabilitySaga', error)
    }
};

export default postAvailabilitySaga;
