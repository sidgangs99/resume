import * as React from "react";

import About from "../components/me/about";
import Hobbies from "../components/me/hobbies";
import Projects from "../components/me/projects";
import Skills from "../components/me/skills";
import WorkExperiance from "../components/me/workExperiances";

export default function Layout() {
  const className = "h-screen w-screen snap-start border-2";
  return (
    <>
      <div className={className}>
        <About />
      </div>
      <div className={className}>
        <Skills />
      </div>
      <div className={className}>
        <Projects />
      </div>
      <div className={className}>
        <WorkExperiance />
      </div>
      <div className={className}>
        <Hobbies />
      </div>
    </>
  );
}
