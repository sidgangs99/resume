import React from "react";

import ProfilePic from "../images/me/profile-pic.jpg";
import LinkedIn from "./social-links/linkedin";
import Mail from "./social-links/mail";
import Medium from "./social-links/medium";
import Twitter from "./social-links/twitter";

export default function Header() {
  return (
    <>
      <div className="text-sm font-light">Let's connect</div>
      <div className="flex space-x-3 md:space-x-6 items-center justify-center">
        <Medium />
        <Mail />
        <LinkedIn />
        <Twitter />
        <img
          src={ProfilePic}
          className="w-6 h-6 rounded-full bg-cover bg-center"
          alt="Profile"
        />
      </div>
    </>
  );
}
