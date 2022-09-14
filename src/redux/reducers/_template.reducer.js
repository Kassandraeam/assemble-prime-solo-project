// ! BE MINDFUL OF THE INITIAL STATE. Does it need to be in an object? Or an array? 

// TODO: STEP 12 - Note that the case matches the dispatch from the Saga. The information you GOT from the Database will now be stored in this reducer. Therefore, all of the information that you got is now accessible anywhere (when you access it using the useSelector hook.) Go back to the component.
const reducerTemplate = (state = {}, action) => { 
    switch (action.type) {
      case 'THIS_WILL_TRIGGER_A_REDUCER': 
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default reducerTemplate;
  
// ! remember to import this to the _root.reducer.js, and to include it in the rootReducer combineReducers, yieldAll.
