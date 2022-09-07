const availabilityReducer = (state = '', action) => {
    switch (action.type) {
      case 'CALL_TO_REDUCER':
        return action.payload;
      case 'UNSET_USER':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default availabilityReducer;
  