import React from "react";

import JavascriptGif from "../../images/gifs/javascript-gif.gif";
import PythonGif from "../../images/gifs/python-gif.gif";
import CppIcon from "../../images/icons/cpp-icon";
import GoLangIcon from "../../images/icons/golang-icon";
import LinuxGif from "../../images/gifs/linux-gif.gif";
import ReactIcon from "../../images/icons/react-icon";
import NodeIcon from "../../images/icons/node-icon";
import GitIcon from "../../images/icons/git-icon";
import AWSIcon from "../../images/icons/aws-icon";
import { resumeDriveLink } from "../../constants/links";

export default function Skills() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-around ">
      <p className="text-2xl text-lime-300">I have 👨‍💻 on</p>
      <div className="flex w-screen flex-col items-center justify-center">
        <div className="flex w-3/4 flex-row items-center justify-between py-4 md:w-2/4">
          <p className="text-lime-400">Languages</p>
          <div className="flex flex-row flex-wrap items-center space-x-4">
            <div className="h-10 w-10">
              <a
                href="https://www.javascript.com"
                rel="noreferrer"
                target="_blank"
              >
                <img src={JavascriptGif} alt="Javascript" />
              </a>
            </div>
            <div>
              <a
                href="https://www.cplusplus.com"
                rel="noreferrer"
                target="_blank"
              >
                <CppIcon />
              </a>
            </div>
            <div className="h-10 w-10 ">
              <a href="https://www.python.org" rel="noreferrer" target="_blank">
                <img src={PythonGif} alt="Python" className="rounded-full" />
              </a>
            </div>
            <div className="h-20 w-20">
              <a href="https://go.dev" rel="noreferrer" target="_blank">
                <GoLangIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 flex-row items-center justify-between py-4 md:w-2/4">
          <p className="text-lime-400">Libraries</p>
          <div className="flex flex-row flex-wrap items-center space-x-4">
            <div className="h-10 w-10">
              <a href="https://reactjs.org" rel="noreferrer" target="_blank">
                <ReactIcon />
              </a>
            </div>
            <div className="h-10 w-10">
              <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
                <NodeIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-3/4 flex-row items-center justify-between py-4 md:w-2/4">
          <p className="text-lime-400">Technologies</p>
          <div className="flex flex-row flex-wrap items-center space-x-4">
            <div className="h-10 w-10">
              <a href="https://www.linux.org" rel="noreferrer" target="_blank">
                {/* <LinuxIcon /> */}
                <img src={LinuxGif} alt="Javascript" className="rounded-full" />
              </a>
            </div>
            <div className="h-20 w-20">
              <a href="https://aws.amazon.com" rel="noreferrer" target="_blank">
                <AWSIcon />
              </a>
            </div>
            <div className="h-10 w-10">
              <a href="https://git-scm.com" rel="noreferrer" target="_blank">
                <GitIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex w-full animate-pulse flex-col items-center space-y-4 hover:animate-none ">
        <p className=" text-xs font-extralight text-lime-200">
          Wanna know more!!! <br />
        </p>
        <a href={resumeDriveLink} rel="noreferrer" target="_blank">
          <button className="rounded-3xl border border-lime-700 px-6 py-2 text-xs text-lime-500 hover:bg-lime-400 hover:font-semibold hover:text-neutral-900 ">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}
