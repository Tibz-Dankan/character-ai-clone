import React, { Fragment } from "react";
import { extractFirstLetter } from "../utils/extractFirstLetter";

export const Home = () => {
  return (
    <Fragment>
      <div className="w-full">
        <header className="flex items-end justify-between text-gray-50">
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-lg text-gray-500">Welcome back,</p>
            <p className="flex items-center gap-3">
              <span
                className="cursor-pointer grid place-items-center
                 w-6 h-6 rounded-[50%] text-gray-50 first-letter:uppercase text-sm
                 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              >
                {extractFirstLetter("username")}
              </span>
              <span className="text-lg">username</span>
            </p>
          </div>
          <div>
            <input
              className="text-gray-100 bg-gray-800 outline-none p-4 md:px-8
              rounded-[32px] md:w-96"
              placeholder="Search for characters"
            />
          </div>
        </header>
      </div>
    </Fragment>
  );
};
