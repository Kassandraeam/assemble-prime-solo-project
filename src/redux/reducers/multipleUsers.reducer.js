// const multipleUsersReducer = (state = [], action) => {
//     switch (action.type) {
//       case 'ALL_USERS':
//         ('Get me the days?',action.payload)
//         ('GET ME THE TIMES!!!', action.payload);
//         return action.payload
//       default:
//         return state;
//     }
//   };
  
  const multipleUsersReducer = (state = [], action) => {
    switch (action.type) {
      case 'ALL_USERS':
       // ('THIS REDUCER SHOULD CONTAIN DAYS IN MULTIPLE USERS REDUCEER:', action.payload)
        // ('GET ME THE TIMES!!!', action.payload);
        return action.payload
      // case 'ALL_USERS_FREE_TIME':
      //   ('GET ME THE TIMES!!!', action.payload)
      //   return action.payload
      default:
        return state;
    }
  };
  // user will be on the redux state at:
  // state.user
  export default multipleUsersReducer;