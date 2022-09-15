import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* SagaTemplate() {
    yield takeLatest('This_Should_Match_Between_The_Component_And_Saga', functionThatRunsWhenThisYieldIsActivated)
}

function* functionThatRunsWhenThisYieldIsActivated(action) {
    try {

        // TODO: STEP 2 - Now we need to match the file path with whatever route you are trying to get to. Go to the _template_server.js file to figure out what Route you need to put in here.
        // TODO: STEP 7 - Because this is a GET request, we want to hold the information that we GET in something. We hold that information in response. Now response = the information that we got from the Database.
        const response = yield axios.get('/This_Should_Match_Between_The_Saga_And_Server')

        /* What do we do if we want to target something specifically?
        TODO: If you want to target something specifically, the path will still have to match, but it will have /${action.payload} at the end of it.
        ? Where does action.payload come from and what is it? 
        * action.payload comes from the component that sent a dispatch of 'Type_that_is_sent_from_the_component', and whatever the payload is. It could be anything, in this case, it should be the id.
        ! example: yield axios.get('/This_Should_Match_Between_The_Saga_And_Server/${action.payload})
        */
        /* more CRUD yields when you're too lazy to write them out: 
        yield axios.post('/This_Should_Match_Between_The_Saga_And_Server', action.payload)
        yield axios.get('/This_Should_Match_Between_The_Saga_And_Server')
        yield axios.put('/This_Should_Match_Between_The_Saga_And_Server', action.payload)
        yield axios.delete('/This_Should_Match_Between_The_Saga_And_Server/${action.payload}')
        */

        console.log('This is what you are sending to this SAGA: ACTION.PAYLOAD=', action.payload)

        // TODO: STEP 8 - Now we want to be able to use that information that we GOT anywhere in our app. So we dispatch it to a reducer. 
        yield put({
            // TODO: STEP 9 - Again, we dispatch with a Type that triggers the reducer we want to hold our data. The data being the data we got back from the GET request on step 3.
            type: 'THIS_WILL_TRIGGER_A_REDUCER',
            // TODO: STEP 10 - Now go to the reducer with the matching type. In this case it's the _template.reducer file in the redux -> reducers folder.
            payload: response.data
        })
    }
    catch (error) {
        console.log('error in SAGA, this is what you were trying to send:', action.payload)
        console.error('error in SAGA', error)
    }
};

export default SagaTemplate;

// ! remember to import this to the _root.saga.js, and to include it in the rootSaga yieldAll.

/* ?  What is action.payload? 
    ? What is action.payload? 
    * Action allows us to access payload.
    * Payload is the Key name. (Remember Objects? {Key: Value}).
    * Therefore, action.payload in this case will contain ID.
*/