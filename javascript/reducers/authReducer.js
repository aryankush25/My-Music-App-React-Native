const initialState = {
  loggedIn: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case 'LOGOUT_FAILURE': {
      return {
        ...state,
        loggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
