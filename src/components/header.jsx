import React from "react";

import ProfilePic from "../images/me/profile-pic.jpg";
import Github from './social-links/github'
import Leetcode from './social-links/leetcode'
import LinkedIn from "./social-links/linkedin";
import Mail from "./social-links/mail";
import Medium from "./social-links/medium";
import Twitter from "./social-links/twitter";

export default function Header() {
  return (
      <>
          <div className="text-sm font-light">Let's connect</div>
          <div className="flex items-center justify-center space-x-3 md:space-x-6">
              <Medium />
              <LinkedIn />
              <Leetcode />
              <Github />
              <Twitter />
              <Mail />
              <img
                  src={ProfilePic}
                  className="h-6 w-6 rounded-full bg-cover bg-center"
                  alt="Profile"
              />
          </div>
      </>
  )
}
