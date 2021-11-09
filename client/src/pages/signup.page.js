import React, { useState, useEffect } from "react";

import { SignupAPI } from "../store/user/User.action.js";
import { useDispatch } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes.js";

import { FcGoogle } from "react-icons/fc";

const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const { firebase } = useContext(FirebaseContext);

  // Declaring States
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const isInvalid =
    password === "" || emailId === "" || username === "" || displayName === "";
  useEffect(() => {
    document.title = "Instagram - Signup";
  });
  const HandleSignup = async (event) => {
    event.preventDefault();
    console.log("DisplayName: ", displayName);
    try {
      dispatch(SignupAPI(emailId, password, username, displayName));
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
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
        {/* {errorMessage && (
          <p className="mb-4 text-red-700 text-xs">{errorMessage}</p>
        )} */}
        <form onSubmit={HandleSignup} method="POST">
          <div className="container w-full">
            <input
              aria-label="Enter your email address"
              type="text"
              value={emailId}
              placeholder="Email address"
              className="text-sm text-red-base w-full mr-3 py-5 h-2 px-4 my-2 border-2  placeholder-gray-500 bg-gray-100"
              onChange={(event) => setEmailId(event.target.value)}
            />
            <input
              aria-label="username"
              type="text"
              placeholder="Username"
              value={username}
              className="text-sm text-red-base w-full mr-3 py-5 h-2 px-4  border-2  placeholder-gray-500 bg-gray-100"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              aria-label="Full Name"
              type="text"
              value={displayName}
              placeholder="Display Name"
              className="text-sm text-red-base w-full mr-3 py-5 h-2 px-4 my-2 border-2  placeholder-gray-500 bg-gray-100"
              onChange={(event) => setDisplayName(event.target.value)}
            />

            <input
              aria-label="Enter your password"
              type="password"
              value={password}
              placeholder="Password"
              className="text-sm text-gray-base bg-red w-full mr-3 py-5 h-2 px-4  border-2 placeholder-gray-500 bg-gray-100"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 w-full my-4 py-1 text-white rounded ${
                isInvalid && "opacity-50"
              } `}
            >
              Sign Up
            </button>
            <div className="w-full p-0  flex justify-center align-center ">
              <button className="w-full h-full bg-white border-2 border-gray-200 p-1 flex justify-center align-center">
                <FcGoogle size={26} />
                <p className="text-bold">Google</p>
              </button>
            </div>
            <div className="w-full p-0 flex justify-center align-center mt-4">
              <p className="text-gray-800 text-sm">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-blue-600 text-bold">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
