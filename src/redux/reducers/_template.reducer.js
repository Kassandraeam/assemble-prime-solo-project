const reducerTemplate = (state = {}, action) => { // ! BE MINDFUL OF THE INITIAL STATE. Does it need to be in an object? Or an array? 
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
