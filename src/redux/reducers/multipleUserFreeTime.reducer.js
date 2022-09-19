const multipleUserFreeTimeReducer = (state = [], action) => { 
    switch (action.type) {
      case 'ALL_USERS_FREE_TIME': 
      ('THIS REDUCER IN MULTIPLE USER FREE TIME CONTAINS TIME:',action.payload)
      // ('action payload in freetime reducer', state )
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default multipleUserFreeTimeReducer;
  

  // const multipleUserFreeTimeReducer = (state = [], action) => { 
  //   switch (action.type) {
  //     case 'ALL_USERS_FREE_TIME': 
  //     ('ACTION PAYLOAD IN THE multipleUserFreeTimeReducer:',action.payload)
  //       return [...state, action.payload];
  //     default:
  //       return state;
  //   }
  // };
  
  // // user will be on the redux state at:
  // // state.user
  // export default multipleUserFreeTimeReducer;
  