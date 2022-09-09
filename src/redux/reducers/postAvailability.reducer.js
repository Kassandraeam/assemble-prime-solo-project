const postAvailabilityReducer = (state = {}, action) => {
    switch (action.type) {
      case 'POST_TO_AVAILABILITY_REDUCER':
        console.log('action.payload in reducer',action.payload)
        return {...state, time: action.payload.availability.time}
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default postAvailabilityReducer;
  