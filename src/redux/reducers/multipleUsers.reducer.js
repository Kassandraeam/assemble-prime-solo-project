const multipleUsersReducer = (state = [], action) => {
    switch (action.type) {
      case 'ALL_USERS':
        console.log('action.payload in reducer',action.payload)
        return action.payload
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default multipleUsersReducer;
  