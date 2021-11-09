import React from "react";

import { useSelector } from "react-redux";
// Import Icons
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

import { BsBookmark, BsPlusSquare } from "react-icons/bs";

const Header = (props) => {
  const currentUser = useSelector((state) => state.userState.user);
  return (
    <div className="w-full p-4 bg-blue-900 shadow-md flex flex-row justify-around align-center">
      <div
        className="bg-blue-900 w-1/4 flex  items-center
      "
      >
        <img src="/images/igtextlogo.png" alt="Instagram" className="max-h-8" />
      </div>

      <div className=" w-1/5 grid grid-flow-col grid-cols-6 ">
        <div className="flex flex-col align-center justify-center">
          <AiFillHome size={28} color="rgba(255,255,255,0.8)" />
        </div>
        <div className="flex flex-col align-center justify-center">
          <RiMessengerLine size={27} color="rgba(255,255,255,0.8)" />
        </div>
        <div className="flex flex-col align-center justify-center">
          <BsPlusSquare size={23} color="rgba(255,255,255,0.8)" />
        </div>
        <div className="flex flex-col align-center justify-center">
          <AiOutlineHeart size={28} color="rgba(255,255,255,0.8)" />
        </div>
        <div className="flex flex-col align-center justify-center">
          <BsBookmark size={26} color="rgba(255,255,255,0.8)" />
        </div>
        <div className="w-fullrounded-full flex flex-row align-center">
          <img
            src="images/avatars/orwell.jpg"
            alt="avatar"
            className="w-3/4 rounded-full"
          />
          <p className="pl-2 pt-2 text-md text-white font-bold">
            Hello,
            <span className="font-600 text-white font-bold">
              {currentUser.fullName.split(" ")[0]}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
