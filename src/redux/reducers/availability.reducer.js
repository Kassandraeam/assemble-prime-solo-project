const availabilityReducer = (state = [], action) => {
    switch (action.type) {
      case 'AVAILABLE_TIMES_FOR_USER':
        console.log('availabilityReducer payload:',action.payload)
        return action.payload
    
      case 'UNSET_USER':
        return {};
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default availabilityReducer;
  