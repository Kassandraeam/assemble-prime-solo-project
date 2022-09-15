// ! BE MINDFUL OF THE INITIAL STATE. Does it need to be in an object? Or an array? 
const specificUserReducer = (state = [], action) => { 
    switch (action.type) {
      case 'SPECIFIC_USER_REDUCER': 
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default specificUserReducer;
  
// ! remember to import this to the _root.reducer.js, and to include it in the rootReducer combineReducers, yieldAll.
