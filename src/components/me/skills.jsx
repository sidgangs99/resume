import React from "react";

import JavascriptGif from "../../images/gifs/javascript-gif.gif";
import PythonGif from "../../images/gifs/python-gif.gif";
import CppIcon from "../../images/icons/cpp-icon";

export default function Skills() {
  return (
    <div>
      <div className="flex flex-row justify-around py-4 w-screen items-center">
        <p className="text-lime-400">Languages</p>
        <div className="flex flex-row flex-wrap items-center space-x-4">
          <div className="w-10 h-10">
            <img src={JavascriptGif} alt="Javascript" />
          </div>
          <div className="">
            <CppIcon />
          </div>
          <div className="w-10 h-10">
            <img src={PythonGif} alt="Javascript" />
          </div>
        </div>
      </div>
    </div>
  );
}
