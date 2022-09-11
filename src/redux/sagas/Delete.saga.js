import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* deleteSaga() {
    yield takeLatest('DELETE_AVAILABILITY', deleteAvailability)
}

function* deleteAvailability(action){
    console.log('deleteAvailability.saga action.id', action.id);
    console.log('ACTION.PAYLOAD', action.payload);
    
    try{
        yield axios.delete(`/api/availability/${action.id}`)
        yield put({
            type: 'FETCH_AVAILABILITY',
            payload: action.payload
        })
    } catch {
        console.log('delete error in the delete saga')
    }
};

export default deleteSaga;

// function* deleteMovie(action) {
//     console.log(action.payload)
//     try{
//         yield axios.delete(`/api/movie/${action.payload}`)
//         yield put({type: 'FETCH_MOVIES'})
//     } catch {
//         console.log('delete movie error');
//     }
// }