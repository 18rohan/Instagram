import React from "react";

const SuggestionsItem = (props) => {
  return (
    <div className="flex flex-row justify-center items-center w-full px-2 my-2">
      <img
        src={props.profile_image}
        alt="user profile"
        className="rounded-full w-12 mr-2"
      />
      <div className="flex flex-col justify-start items-start w-28 max-w-xs">
        <p className="font-bold text-sm">{props.name}</p>
        <p className="font-thin text-xs">@{props.username}</p>
      </div>
      <button className="ml-8 bg-blue-500 rounded-md p-2 ">
        <p className="text-xs text-white font-medium">Follow</p>
      </button>
    </div>
  );
};

export default SuggestionsItem;
