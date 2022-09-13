import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* SagaTemplate() {
    yield takeLatest('Type_that_is_sent_from_the_component', functionThatRunsWhenThisYieldIsActivated)
}

function* functionThatRunsWhenThisYieldIsActivated(action) {
    try {
        yield axios.post('/go_to_your_server_and_choose_the_route', action.payload)
        // yield axios.get('/go_to_your_server_and_choose_the_route', action.payload)
        // yield axios.put('/go_to_your_server_and_choose_the_route', action.payload)
        // yield axios.delete('/go_to_your_server_and_choose_the_route', action.payload)
        console.log('This is what you are sending to this SAGA: ACTION.PAYLOAD=',action.payload)
        yield put({
            type: 'THIS_WILL_TRIGGER_A_REDUCER',
            payload: action.payload
        })
    }
    catch (error) {
        console.log('error in SAGA, this is what you were trying to send:',action.payload)
        console.error('error in SAGA', error)
    }
};

export default SagaTemplate;

// ! remember to import this to the _root.saga.js, and to include it in the rootSaga yieldAll.
