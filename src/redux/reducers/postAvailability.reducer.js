const postAvailabilityReducer = (state = [], action) => {
    switch (action.type) {
      case 'POST_TO_AVAILABILITY_REDUCER':
        // ('action.payload in reducer',action.payload)
        return [...state, action.payload]
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default postAvailabilityReducer;
  