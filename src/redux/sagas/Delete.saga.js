// * DELETE * //

import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* deleteSaga() {
    yield takeLatest('DELETE_AVAILABILITY', deleteAvailability)
    yield takeEvery('DELETE_ALL_AVAILABILITY', deleteAllAvailability)
}

function* deleteAvailability(action) {
    try {
        yield axios.delete(`/api/availability/${action.id}`)
        yield put({
            type: 'FETCH_AVAILABILITY',
            payload: action.payload
        })
    } catch {
        // ('delete error in the delete saga')
    }
};

function* deleteAllAvailability(action) {
    console.log('here')
    try {
        yield axios.delete(`/api/availability/deleteAll`)

        yield put({
            type: 'FETCH_AVAILABILITY',
            payload: action.payload
        })
    } catch {
        // ('delete error in the delete saga')
    }
}

export default deleteSaga;