import React from "react";
import SwipeUpIcon from "../../images/icons/swipe-up";

export default function About() {
  return (
    <div className="flex flex-col justify-around text-lime-300 items-center w-screen h-screen">
      <h1 className="mb-1 font-mono text-4xl md:text-6xl">
        Hi, I'm <br className="block md:hidden" />
        <span className="inline-flex py-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent">
          Siddharth 👋
        </span>
      </h1>
      <div className="flex flex-col  animate-bounce justify-center w-screen items-center">
        <p>Swipe up to know more</p>
        <div className="w-4 h-4 fill-lime-300">
          <SwipeUpIcon />
        </div>
      </div>
    </div>
  );
}
