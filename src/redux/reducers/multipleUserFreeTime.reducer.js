
const multipleUserFreeTimeReducer = (state = [], action) => { 
    switch (action.type) {
      case 'ALL_USERS_FREE_TIME': 
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default multipleUserFreeTimeReducer;
  