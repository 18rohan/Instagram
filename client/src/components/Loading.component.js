import React from "react";

const Loading = () => {
  return (
    <container className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full flex flex-col  justify-center items-center ">
        <img src="/images/loading.png" alt="Instagram" className="my-5 w-28 " />
      </div>
    </container>
  );
};
export default Loading;
