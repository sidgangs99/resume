import React from "react";

import { blogs } from "../../constants/links";
import RightArrow from "../../images/icons/right-arrow";
import BlogsPreviewGenerator from "./blogs-preview-generator";

export default function Blogs() {
  const mediumLinks = blogs.medium;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-around">
      <div className="text-l flex flex-row text-lime-300 md:space-x-4 md:text-xl">
        <p>Catch out some medium blogs...</p>
        <p className="animate-bounce text-xl md:text-3xl">👇</p>
      </div>
      <div className="flex w-3/4 snap-x snap-mandatory flex-row items-center justify-start space-x-8 overflow-x-auto">
        {mediumLinks.map((link, idx) => (
          <div key={idx}>
            <BlogsPreviewGenerator url={link} />
          </div>
        ))}
      </div>
      <div className="flex w-screen flex-row items-center justify-center space-x-4">
        <p className="text-sm text-lime-300">Swipe to view more</p>
        <div className="h-4 w-4 fill-lime-300">
          <RightArrow />
        </div>
      </div>
    </div>
  );
}
