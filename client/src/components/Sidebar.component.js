import React, { useContext } from "react";

import { Signout } from "../store/user/User.action.js";
import { ModalContext } from "../context/Modal.context.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes.js";
// Import Icons
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell, BsPlusSquare } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const modalState = useContext(ModalContext);
  const ModalHandler = () => {
    modalState.setModal((currentState) => !currentState);
  };
  return (
    <div className="  w-full flex flex-col z-10 bg-red-500">
      
      <div className=" flex flex-row w-full justify-between items-center  ">
        {/* Sidebar-header */}
        <div className="col-span-1 fixed left-8 top-4 ">
          <img src="/images/iglogo1.png" alt="Instagram" className="max-h-8" />
        </div>
        <div className="col-span-2 flex flex-row w-full justify-start items-start fixed left-24 top-3">
          <img
            src="/images/logo.png"
            alt="Instagram"
            className="h-8 mt-2"
          />
        </div>
      </div>
      {/* Sidebar-Profile Picture */}
      <div className="flex flex-col  justify-center items-center mt-8  fixed left-24 top-12 ">
        <img
          src="images/avatars/default.png"
          alt="avatar"
          className="w-24 rounded-full border-4 border-pink-500"
        />
        <h1 className="text-gray-800 font-bold pt-4">{props.name}</h1>
        <h2 className="text-gray-400 font-bold">@{props.username}</h2>
      </div>
      {/* Posts, Followers, Following */}
      <div className="grid grid-cols-3 mt-8 fixed left-0.5 top-56">
        <div className="col-span-1 flex flex-col justify-center items-center px-1">
          <h2 className="text-gray-800 font-bold">{props.posts}</h2>
          <h1 className="text-gray-400 font-bold">Posts</h1>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center border-l border-gray-600 px-2 pt-1">
          <h2 className="text-gray-800 font-bold">{props.following}</h2>
          <h1 className="text-gray-400 font-bold">Following</h1>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center border-l border-gray-600 px-2 pt-1">
          <h2 className="text-gray-800 font-bold">{props.followers}</h2>
          <h1 className="text-gray-400 font-bold">Followers</h1>
        </div>
      </div>
      {/* Menu */}
      <div className="flex w-1/4 flex-col mt-8 pl-8 fixed top-72 left-8">
        <button
          onClick={ModalHandler}
          className="w-1/2 flex flex-row justify-start items-center mt-4 z-10"
        >
          <BsPlusSquare color="orange" size={28} />
          <h1 className="text-gray-800 font-bold pl-4 text-white ">Create</h1>
        </button>

        <div className="w-1/2 flex flex-row justify-start items-center mt-4">
          <CgMenuGridR color="black" size={26} />
          <h1 className="text-gray-800 font-400 pl-4 ">Feed</h1>
        </div>

        <div className="w-1/2 flex flex-row justify-start items-center mt-4">
          <AiOutlineSearch color="black" size={24} />
          <h1 className="text-gray-800 font-400 pl-4">Explore</h1>
        </div>
        <div className="w-1/2 flex flex-row justify-start items-center mt-4">
          <BsBell color="black" size={25} />
          <h1 className="text-gray-800 font-400 pl-4">Notifications</h1>
        </div>
        <div className="w-1/2 flex flex-row justify-start items-center mt-4">
          <FiSend color="black" size={24} />
          <h1 className="text-gray-800 font-400 pl-4">Direct</h1>
        </div>
        {/* <div className="w-1/2 flex flex-row justify-start items-center mt-4">
          <img src="/images/igtv.png" alt="ig tv" className="w-6" />
          <h1 className="text-gray-800 font-400 pl-4">IG TV</h1>
        </div> */}
        <button
          className="w-1/2 flex flex-row justify-start items-center mt-4 border-0"
          onClick={() => {
            console.log("Signout Clicked");
            dispatch(Signout());

            history.push(ROUTES.LOGIN);
          }}
        >
          <MdLogout color="gray" size={25} />
          <h1 className="text-gray-600 font-400 pl-4">Logout</h1>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
