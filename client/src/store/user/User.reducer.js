import { LOGIN, LOGOUT, SIGNIN_ERRORS } from "./User.action.js";
const InitialState = {
  user: null,
  SigninErrors: null,
};

const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: InitialState.user,
      };
    case SIGNIN_ERRORS:
      return {
        ...state,
        SigninErrors: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
