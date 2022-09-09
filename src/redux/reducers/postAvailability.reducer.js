const postAvailabilityReducer = (state = [], action) => {
    switch (action.type) {
      case 'POST_TO_AVAILABILITY_REDUCER':
        return action.payload
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default postAvailabilityReducer;
  