// import { auth } from "../../lib/firebase.js";
import axios from "axios";
import Cookie from "js-cookie";
export const REGISTER_USER = "REGISTER_USER";
export const USER_LOGIN = "USER_LOGIN";
export const LOGIN = "LOGIN";
export const SIGNIN_ERRORS = "SIGNIN_ERRORS";
export const LOGOUT = "LOGOUT";
export const RegisterUser = (payload) => ({
  type: REGISTER_USER,
  payload: payload,
});
export const UserLogin = (payload) => ({
  type: USER_LOGIN,
  payload: payload,
});

export const SignupAPI = (email, password, username, displayName) => {
  return async (dispatch) => {
    try {
      console.log("ACTION DISPLAY NAME: ", displayName);
      const url = "http://localhost:4000/user/create";
      const response = await axios.post(url, {
        email_id: email,
        password: password,
        username: username,
        display_name: displayName,
      });

      const resData = await response;

      console.log(response);

      // Storing the Access token and Refresh token in Local Storage
      var date = new Date();
      date.setTime(date.getTime() + 30 * 1000);

      // Cookie.set("access_token", resData.data.access_token);
      // Cookie.set("refresh_token", resData.data.refresh_token);
      console.log("RESPONSE DATA", resData);
      const userData = resData.data;

      dispatch({ type: LOGIN, payload: userData });
    } catch (err) {
      // dispatch({ type: UPDATE_SIGNIN_ERRORS, data: err });
      console.log(err);
    }
  };
};

export const LoginAPI = (email, password) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:4000/login";
      const response = await axios.post(url, {
        email_id: email,
        password: password,
      });

      const resData = await response;
      const userData = resData.data;
      console.log("ACCESS TOKEN: ", userData);
      Cookie.set("access_token", resData.data.token);

      dispatch({ type: LOGIN, payload: userData });
      dispatch({ type: SIGNIN_ERRORS, payload: null });
    } catch (err) {
      // console.log("ERROR MESSAGE: ", err.response);
      dispatch({
        type: SIGNIN_ERRORS,
        payload: err.response.data,
      });
    }
  };
};
export const Signout = () => {
  return (dispatch) => {
    try {
      dispatch({ type: LOGOUT, payload: null });
    } catch (err) {
      console.log(err);
    }
  };
};

// export const SignoutAPI = () => {
//   return (dispatch) => {
//     auth
//       .signOut()
//       .then(() => {
//         dispatch(UserLogin(null));
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
// };
