import axios from "axios";
import Cookie from "js-cookie";

// Creating a single Post
export const CreatePost = (data) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:4000/post/create";
      const headers = {
        auth_token: Cookie.get("access_token"),
        "Content-Type": "application/x-www-form-urlencoded",
      };
      axios.post(url, data, { headers: headers }).then((response) => {
        console.log("POST DATA: ", response);
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Fetch All Posts
export const FetchAllPosts = () => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:4000/post";
      const headers = {
        auth_token: Cookie.get("access_token"),
      };
      const result = axios.get(url, { headers: headers });
      console.log("Data fetched: ", result);
    } catch (error) {
      console.log(error);
    }
  };
};

//Liking a Post
export const LikePost = (postid) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:4000/post/like";
      const data = {
        post_id: postid,
      };
      const headers = {
        auth_token: Cookie.get("access_token"),
      };
      axios.post(url, data, { headers: headers }).then((response) => {
        console.log("Liked Succesfully");
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const UnlikePost = (postid) => {
  return async (dispatch) => {
    try {
      const url = "http://localhost:4000/post/unlike";
      const data = {
        post_id: postid,
      };
      const headers = {
        auth_token: Cookie.get("access_token"),
      };
      axios.post(url, data, { headers: headers }).then((response) => {
        console.log("Unliked Successfully");
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
