import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Import Actions
import { LikePost } from "../store/post/Post.action";
import { UnlikePost } from "../store/post/Post.action";
// import Icons
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";

// Actions on Liking a post:
// - Toggle the state to change the color of the 'heart' icon.
// - Increment the number of likes in the 'likes_array' by 1.
// - Dispatch an action to 'push' or 'pull' the 'CurrentUser._id' in the 'likes' array of a post.

const Feed = (props) => {
  const dispatch = useDispatch();
  // Check for the current status of the like
  const CheckPostLiked = () => {
    if (props.likes_array.includes(props.currentuser_id)) {
      return true;
    } else {
      return false;
    }
  };
  const [liked, setLiked] = useState(CheckPostLiked());
  const [likesNumber, setlikesNumber] = useState(props.likes);
  const [saved, setSaved] = useState(false);

  const ToggleSave = (saved) => {
    setSaved((prevState) => !prevState);
  };

  
  
  const HandleLikes = (liked, likesNumber) => {
    // Increment the 'likesNumber' by 1
    console.log("Liked Status: ", liked);
    if (liked) {
      setLiked((prevState) => !prevState);
      dispatch(UnlikePost(props.post_id));
      setlikesNumber((prevlikes) => prevlikes - 1);
    } else if (!liked) {
      setLiked((prevState) => !prevState);
      dispatch(LikePost(props.post_id));
      setlikesNumber((prevlikes) => prevlikes + 1);
    }
  };

  
  return (
    <div className="  flex flex-col my-8 mx-16 ">
      {/* First Row: Post container Header */}
      <div className="w-full flex flex-row justify-between items-center p-4  px-8">
        {/* username & user image */}
        <div className="w-full flex flex-row items-center justify-start ">
          {props.dp ? (<img
            src={props.dp}
            alt="user profile"
            className="rounded-full w-8"
          />) : (
            <img
            src="images/avatars/default.png"
            alt="user profile"
            className="rounded-full w-8"
          />
          )}
          
          <p className="pl-2 text-gray-800 font-bold">{props.username}</p>
        </div>
        <div className="w-2/6 flex flex-col justify-items-end items-end">
          <BiDotsHorizontalRounded size={30} color="black" />
        </div>
      </div>
      {/* Second Row: Post container Image */}
      <div className="w-full  flex flex-col justify-center items-center rounded-md">
        
        <img
          src={props.image}
          alt="post"
          className="w-full  rounded-xl shadow-lg"
        />
      </div>
      {props.caption && (
        <div className="w-full flex flex-row items-center justify-start px-2 pt-3 ">
          <p className="text-gray-900 font-bold  text-sm rounded-lg p-1">
            {props.username}
          </p>
          <p className="text-gray-700 text-md ml-2">{props.caption}</p>
        </div>
      )}

      {/* Last Row: comments, like etc. icons */}
      <div className="w-full flex flex-row justify-between items-center ">
        {/* Social Interaction buttons */}

        <div className="w-1/6 flex flex-row p-2 justify-around">
          <button
            onClick={() => {
              
              HandleLikes(liked, likesNumber);
            }}
            style={{ border: "0px", backgroundColor: "transparent" }}
          >
            {liked  ? (
              <AiFillHeart size={25} color="red" />
            ) : (
              <AiOutlineHeart size={25} color="rgba(0,0,0,0.8)" />
            )}
          </button>
          <FaRegComment size={23} color="rgba(0,0,0,0.8)" />
          {/* <FiSend size={24} color="rgba(0,0,0,0.8)" /> */}
        </div>
        {/* Save Button */}
        <div className="w-1/3 flex flex-col justify-items-end items-end pr-2">
          <button
            style={{ border: "0px", backgroundColor: "transparent" }}
            onClick={ToggleSave}
          >
            {saved ? (
              <BsFillBookmarkCheckFill size={24} color="white" />
            ) : (
              <BsBookmark size={24} color="white" />
            )}
          </button>
        </div>
      </div>
      {/* Number of likes */}
      <p className="font-bold pl-3 text-md text-gray-800">
        {likesNumber} likes
      </p>
      {/* Comments Section */}
      <div className="w-full ">
        {/* Single Comment */}
        <div className="w-full">
          {/* User Image */}
          {/* <div className=""></div> */}
        </div>
      </div>
    </div>
  );
};

export default Feed;
