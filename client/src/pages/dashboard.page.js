import React, { useState, useLayoutEffect } from "react";
import { Redirect } from "react-router-dom";

import Modal from "../components/Modal.component.js";
import Feed from "../components/Feed.component.js";
import Suggestions from "../components/Suggestions.component.js";
import { ModalContext } from "../context/Modal.context.js";
import Sidebar from "../components/Sidebar.component.js";
import Stories from "../components/Stories.component.js";
import axios from "axios";

import { useSelector } from "react-redux";
import * as ROUTES from "../constants/routes.js";
const Dashboard = (props) => {
  const [modal, setModal] = useState(false);
  const [allposts, setPosts] = useState([]);

  const currentUser = useSelector((state) => state.userState.user);

  async function fetchData() {
    try {
      let response = await axios(`http://localhost:4000/post`);
      let posts = await response.data;
      setPosts(posts);
      console.log("STATE: ", allposts);
    } catch (err) {
      console.log(err);
    }
  }
  useLayoutEffect(() => {
    fetchData();
    /*eslint-disable */
  }, []);

  if (currentUser === null) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <>
      {currentUser === null && <Redirect to={ROUTES.LOGIN} /> }
      <ModalContext.Provider value={{ modal, setModal }}>
        {modal ? (
          <Modal
            username={currentUser.username}
            name={currentUser.display_name}
            dp={currentUser.profile_picture}

          />
        ) : (
          ""
        )}
        {/* <Header /> */}

        <div className="  flex flex-row h-screen scroll-none z-">
          {/* Sidebar */}
          <div className="flex flex-col justify-items-end items-end bg-red-800  ">
            <Sidebar
              name={currentUser.display_name}
              username={currentUser.username}
              followers={currentUser.followers.length}
              following={currentUser.following.length}
              posts = {currentUser.user_posts.length}
            />
          </div>
          {/* Feed */}

          <div className="bg-white absolute overflow-y-scroll left-72 ">
            {/* Stories */}
            <div className="w-full flex flex-col justify-start items-start mt-16 ml-16">
              <div className="w-full justify-start mb-2">
                <h1 className="text- font-bold text-left">Stories</h1>
              </div>
              <Stories />
            </div>

            <div className="flex flex-col w-3/4 ">
              {!allposts && <h1>...Loading</h1>}
              {allposts.map((post) => (
                <div className="row-end-3 row-span-">
                  <Feed
                    key={post._id}
                    post_id={post._id}
                    currentuser_id = {currentUser._id}
                    image={"http://localhost:4000/" + post.post_image}
                    caption={post.post_caption}
                    username={post.posted_by_username}
                    likes={post.likes.length}
                    likes_array = {post.likes}
                    dp={post.posted_by_dp}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Suggestions Sidebar */}
          <div className="fixed right-10  w-72 mb-10">
            <Suggestions />
          </div>
        </div>
      </ModalContext.Provider>
    </>
  );
};
export default Dashboard;
