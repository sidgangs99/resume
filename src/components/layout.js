import * as React from "react";

import About from "./me/about";
import Blogs from "./me/blogs";
import Hobbies from "./me/hobbies";
import Projects from "./me/projects";
import Skills from "./me/skills";
import WorkExperiance from "./me/work-experiances";

export default function Layout() {
  const className = "h-screen w-screen snap-start bg-neutral-900";
  return (
    <>
      <div className={className}>
        <About />
      </div>
      <div className={className}>
        <Blogs />
      </div>
      <div className={className}>
        <Skills />
      </div>
      {/*
      <div className={className}>
        <Projects />
      </div> 
      <div className={className}>
        <WorkExperiance />
      </div>
      <div className={className}>
        <Hobbies />
      </div>
      */}
    </>
  );
}
