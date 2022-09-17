const multipleUserFreeTimeReducer = (state = [], action) => { 
    switch (action.type) {
      case 'ALL_USERS_FREE_TIME': 
      console.log('ACTION PAYLOAD IN THE multipleUserFreeTimeReducer:',action.payload)
      console.error('action payload in freetime reducer', state )
        return action.payload;
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
  //     console.log('ACTION PAYLOAD IN THE multipleUserFreeTimeReducer:',action.payload)
  //       return [...state, action.payload];
  //     default:
  //       return state;
  //   }
  // };
  
  // // user will be on the redux state at:
  // // state.user
  // export default multipleUserFreeTimeReducer;
  