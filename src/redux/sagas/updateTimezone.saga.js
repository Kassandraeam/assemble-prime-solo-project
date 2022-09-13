// * PUT * //
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateSaga() {
    yield takeLatest('UPDATE_TIMEZONE', updateTimezone)
}

function* updateTimezone(action){
    console.log('ACTION.PAYLOAD.inputTimeZone:', action.payload.inputTimeZone);
    console.log('ACTION.PAYLOAD.USER:', action.payload.user)
    
    try{
        yield axios.put(`/api/user/`, action.payload)
        // !  I need to target the user.id
        yield put({
            type: 'FETCH_AVAILABILITY',
            payload: action.payload.user
        })
    } catch {
        console.log('delete error in the delete saga')
    }
};

export default updateSaga;
