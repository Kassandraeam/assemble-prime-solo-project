import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* offSetZoneName() {
    yield takeEvery('POST_TIME_IN_UTC', postUTCTime);
}

function* postUTCTime(action){
    // console.log(event);
    try {
    console.log(action)
    yield axios.post('/api/user', action.payload);
    } catch {
        console.log(action.payload)
        console.log('error in postUTCTime')
    }
}


// function* addMovie(action) {
//     console.log(action.payload)
//     try{
//         yield axios.post('/api/movie', action.payload)
//         yield put({type: 'FETCH_MOVIES'})
//     } catch {
//         console.log('add movie error');
//     }
// }

export default offSetZoneName;
