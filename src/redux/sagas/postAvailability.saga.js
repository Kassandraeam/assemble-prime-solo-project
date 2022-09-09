import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postAvailabilitySaga() {
    yield takeLatest('POST_AVAILABILITY', postAvailability)
}

function* postAvailability(action) {
    try {
        // console.log('Action.payload in the postAvailability Saga',action.payload)
        // console.log('Action.payload.availability.user:',action.payload.availability.user); 
        // console.log('Action.payload.availability.weekday:',action.payload.availability.weekday); 
        // console.log('Action.payload.availability.time:',action.payload.availability.time); 


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
