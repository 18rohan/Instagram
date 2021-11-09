// Import Packages
import React, { useState, useEffect } from "react";

import { LoginAPI } from "../store/user/User.action.js";

import { Link, useHistory,  } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
// Import Components
import * as ROUTES from "../constants/routes.js";
import { FcGoogle } from "react-icons/fc";

const Login = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // Declaring States
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isInvalid = password === "" || emailId === "";
  const SigninErrors = useSelector((state) => state.userState.SigninErrors);
  const currentUser = useSelector((state) => state.userState.user);
  
  // On Page reload
  useEffect(() => {
    document.title = "Instagram - Login";

    if (SigninErrors) {
      setErrorMessage(SigninErrors);
    }
    if (currentUser !== null) {
      history.push(ROUTES.DASHBOARD);
    }
    /* eslint-disable */
  }, [SigninErrors]);

  // Login Component
  const HandleLogin = async (event) => {
    event.preventDefault();

    dispatch(LoginAPI(emailId, password));
  };
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      {}
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="Iphone Poster" />
      </div>
      <div className="flex flex-col w-2/5 bg-white justify-center p-5 border-2 border-grey">
        <div className="justify-center w-full flex flex-col justify-center items-center">
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="my-5 w-1/2 flex justify-center"
          />
        </div>
        {errorMessage && (
          <p className="mb-4 text-red-700 text-xs">{errorMessage}</p>
        )}
        <form onSubmit={HandleLogin} method="POST">
          <div className="container w-full">
            <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-red-base w-full mr-3 py-5 h-2 px-4 my-2 border-2  placeholder-gray-500 bg-gray-100"
              onChange={(event) => setEmailId(event.target.value)}
            />
            <input
              aria-label="Enter your email address"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base bg-red w-full mr-3 py-5 h-2 px-4 border-2 placeholder-gray-500 bg-gray-100"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 w-full my-4 py-1 text-white rounded ${
                isInvalid && "opacity-50"
              } `}
            >
              Sign in
            </button>
            <div className="w-full p-0  flex justify-center align-center">
              <button className="w-full h-full bg-white border-2 border-gray-200 p-1 flex justify-center align-center">
                <FcGoogle size={26} />
                <p className="text-bold">Google</p>
              </button>
            </div>
            <div className="w-full p-0 flex justify-center align-center mt-4">
              <p className="text-gray-800 text-sm">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="text-blue-600 text-bold">SignUp</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
