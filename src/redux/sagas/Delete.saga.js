// * DELETE * //

import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

function* deleteSaga() {
    yield takeLatest('DELETE_AVAILABILITY', deleteAvailability)
    yield takeEvery('DELETE_ALL_AVAILABILITY', deleteAllAvailability)
}

function* deleteAvailability(action) {
    console.log('Delete availability.')
    try {
        yield axios.delete(`/api/availability/${action.id}`)
        yield put({
            type: 'FETCH_AVAILABILITY',
            payload: action.payload
        })
    } catch {
        console.error('delete error in the delete saga')
    }
};

function* deleteAllAvailability(action) {
    console.warn('here')
    console.warn(action.payload.user, 'action in delete all availability')
    try {
        yield axios.delete(`/api/availability/deleteAll/${action.payload.user}`)
        // yield put({
        //     type: 'FETCH_AVAILABILITY',
        //     payload: action.payload
        // })
        console.error('success')
    } catch {
        console.error('error in deleteAllAvailability')
    }
}

export default deleteSaga;