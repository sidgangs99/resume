import React from "react";

import { blogs } from "../../constants/links";
import BlogsPreviewGenerator from "./blogs-preview-generator";

export default function Blogs() {
  const mediumLinks = blogs.medium;

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-around">
      <div className="flex space-x-4 text-xl text-lime-300">
        <p>Catch out some medium blogs...</p>
        <p className="animate-bounce text-3xl">👇</p>
      </div>
      <div className="flex w-3/4 snap-x snap-mandatory flex-row items-center justify-start space-x-8 overflow-x-auto">
        {mediumLinks.map((link, idx) => (
          <div key={idx}>
            <BlogsPreviewGenerator url={link} />
          </div>
        ))}
      </div>
    </div>
  );
}
