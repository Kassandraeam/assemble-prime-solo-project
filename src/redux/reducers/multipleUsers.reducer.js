// const multipleUsersReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'ALL_USERS':
//         console.warn('Get me the days?',action.payload)
//         console.warn('GET ME THE TIMES!!!', action.payload);
//         return action.payload
//       default:
//         return state;
//     }
//   };
  
  const multipleUsersReducer = (state = [], action) => {
    switch (action.type) {
      case 'ALL_USERS':
       // console.warn('THIS REDUCER SHOULD CONTAIN DAYS IN MULTIPLE USERS REDUCEER:', action.payload)
        // console.warn('GET ME THE TIMES!!!', action.payload);
        return action.payload
      // case 'ALL_USERS_FREE_TIME':
      //   console.warn('GET ME THE TIMES!!!', action.payload)
      //   return action.payload
      default:
        return state;
    }
  };
  // user will be on the redux state at:
  // state.user
  export default multipleUsersReducer;