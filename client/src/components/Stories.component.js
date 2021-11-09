import React from "react";

const Stories = (props) => {
  return (
    <div className="h-28  w-1/2 flex flex-row justify-start border border-gray-200 shadow-lg items-center overflow-x-scroll bg-gray-100 ">
      <div className="mx-1 w-20">
        <img
          src="images/avatars/orwell.jpg"
          alt="avatar"
          className="w-24 rounded-full border-4 border-pink-500"
        />
      </div>
      <div className="mx-1 w-20">
        <img
          src="images/avatars/orwell.jpg"
          alt="avatar"
          className="w-24 rounded-full border-4 border-pink-500"
        />
      </div>
      <div className="mx-1 w-20">
        <img
          src="images/avatars/orwell.jpg"
          alt="avatar"
          className="w-24 rounded-full border-4 border-pink-500"
        />
      </div>
      <div className="mx-1 w-20">
        <img
          src="images/avatars/orwell.jpg"
          alt="avatar"
          className="w-24 rounded-full border-4 border-pink-500"
        />
      </div>
      <div className="mx-1 w-20" style={{ minWidth: "40px" }}>
        <img
          src="images/avatars/orwell.jpg"
          alt="avatar"
          className="w-24 rounded-full border-4 border-pink-500"
        />
      </div>
    </div>
  );
};
export default Stories;
