import React from "react";
import SuggestionsItem from "./SuggestionsItem.component";
// import Icons

const Suggestions = (props) => {
  return (
    <div className="flex flex-col my-8 shadow-xl bg-white flex flex-col justify-start items-start ">
      <div className="flex justify-start  w-full p-4">
        <h1 className="font-bold text-md text-gray-500">Suggestions for you</h1>{" "}
      </div>

      <div className="flex flex-col justify-start items-start  pl-3 overflow-scroll">
       <SuggestionsItem profile_image="images/avatars/orwell.jpg" name="Karl Hadwen" username="karlhadwen"/>
       <SuggestionsItem profile_image="images/avatars/dali.jpg" name="Jessy J." username="jesss112"/>
       <SuggestionsItem profile_image="images/avatars/default.png" name="Albert Nova" username="albert_the_great"/>
       <SuggestionsItem profile_image="images/avatars/raphael.jpg" name="Stephen King" username="stephenking18"/>
        
      </div>
    </div>
  );
};

export default Suggestions;
