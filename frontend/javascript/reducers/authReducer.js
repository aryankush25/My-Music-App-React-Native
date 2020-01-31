const initialState = {
  isSignedIn: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IS_SIGNED_IN_SUCCESS': {
      return {
        ...state,
        isSignedIn: true,
      };
    }
    case 'FETCH_IS_SIGNED_IN_FALIURE': {
      return {
        ...state,
        isSignedIn: false,
      };
    }
    case 'SIGN_IN_SUCCESS': {
      return {
        ...state,
        isSignedIn: true,
      };
    }
    case 'SIGN_IN_FAILURE': {
      return {
        ...state,
        isSignedIn: false,
      };
    }
    case 'SIGN_UP_SUCCESS': {
      return {
        ...state,
        isSignedIn: true,
      };
    }
    case 'SIGN_UP_FAILURE': {
      return {
        ...state,
        isSignedIn: false,
      };
    }
    case 'SIGN_OUT_SUCCESS': {
      return {
        ...state,
        isSignedIn: false,
      };
    }
    case 'SIGN_OUT_FALIURE': {
      return {
        ...state,
        isSignedIn: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
