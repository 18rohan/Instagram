import React, { useContext, useState } from "react";
import { CreatePost } from "../store/post/Post.action.js";
import { useDispatch,useSelector } from "react-redux";
import { ModalContext } from "../context/Modal.context.js";
import { GrFormClose } from "react-icons/gr";

const Modal = (props) => {
  const dispatch = useDispatch();
  const modalState = useContext(ModalContext);
  const currentUser = useSelector((state) => state.userState.user);
  console.log("CURRENT MODAL USERS: ",currentUser);
  const ModalHandler = () => {
    modalState.setModal((currentState) => !currentState);
  };

  // Preview Selected Image
  const [postImage, setPostImage] = useState("");
  const [caption, setCaption] = useState("");
  const HandleImage = (e) => {
    const image = e.target.files[0];
    console.log("IMAGE PATH: ", e.target.files[0]);
    if (image === " " || image === undefined) {
      alert(`Image selected is of type ${typeof image}`);
      return;
    }

    setPostImage(image);
    
  };
  const Post = () => {
    const data = new FormData();
    data.append("post_caption", caption);
    data.append("posted_by_username",props.username);

    data.append("posted_by_dp",props.dp);
    data.append("post_image", postImage);
    
    console.log("FORM SENT");
    console.log("FORM DATA: ", data);
    dispatch(CreatePost(data));
  };
  console.log("POST IMAGE: ", postImage);
  console.log("USERNAME: ",props.username);
  console.log("POST CAPTION: ", caption);
  return (
    <div
      className="w-full h-screen z-50 bg-gray-600 flex justify-center items-center fixed"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      {/* Modal Container */}
      <div className="w-3/4 h-full bg-white rounded-lg overflow-scroll">
        {/* Header */}
        <div className="w-full border-b-2 border-gray-200 flex justify-end items-center py-4 px-4 sticky">
          <div className="w-full flex flex-row justify-between items-stretch ">
            <div>
              <img src="images/iglogo1.png" alt="ig" />
            </div>
            <h1 className="text-xl  font-bold text-gray-600">New Post</h1>
            <h1>
              <button className="border-0" onClick={ModalHandler}>
                <GrFormClose size={30} color="black" />
              </button>
            </h1>
          </div>
        </div>
        {/* Drag Image Space */}
        <form
          action="#"
          className="w-full h-5/6 flex flex-col justify-center items-center"
        >
          {/* <div className="w-full h-5/6 flex flex-col justify-center items-center"> */}
          {postImage ? (
            <img
              src={URL.createObjectURL(postImage)}
              alt="gallery logo"
              className="h-1/2 py-4"
            />
          ) : (
            <div className="flex flex-col">
              <img
                src="images/galleryimg.svg"
                alt="gallery logo"
                className="w-5/6"
              />
              <h1 className="font-400 text-black text-xl py-4">
                Drag photos and videos here.
              </h1>
            </div>
          )}

          <div>
            {/* </input> */}
            <label className="bg-blue-600 p-2 rounded-lg placeholder-white flex flex-col justify-center items-center ">
              {" "}
              <p className="text-white font-400 text-sm">
                Select From Computer
              </p>
              <input
                type="file"
                accept="image/gif, image/jpeg, image/png,image/jpg"
                name="image"
                id="file"
                onChange={HandleImage}
                size="60"
                className="hidden"
              />
            </label>
          </div>
          <div className="w-3/4  h-24  border-t-2 border-gray-200  flex flex-col justify-start items-start pt-8 pl-8 mt-4">
            <div className="w-full flex flex-col justify-end items-end mt-2">
              <textarea
                placeholder="Enter your caption here!"
                className="w-full border border-gray-500 rounded-lg pl-4 pt-4"
                rows="4"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              <button
                onClick={() => {
                  Post();
                  ModalHandler();
                }}
                className="bg-blue-600 w-1/4 p-2 rounded-lg placeholder-white flex flex-col justify-center items-center mt-4"
              >
                <p className="text-white font-bold">Post</p>
              </button>
            </div>
          </div>
          {/* </div> */}
        </form>
        {/* Caption Input Field */}
      </div>
    </div>
  );
};
export default Modal;
