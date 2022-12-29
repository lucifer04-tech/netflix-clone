import React from "react";
import SaveShow from "../components/SaveShow";

const Account = () => {
  return (
    <>
      <div className="w-fulll text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/fbb54774-ca17-4208-a995-db44bffe4163/IN-en-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SaveShow />
    </>
  );
};

export default Account;
