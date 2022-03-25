import * as React from "react";

import About from "../components/about";
import Hobbies from "../components/hobbies";
import Projects from "../components/projects";
import Skills from "../components/skills";
import WorkExperiance from "../components/workExperiances";

const IndexPage = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <WorkExperiance />
      <Hobbies />
    </>
  );
};

export default IndexPage;
