import React from "react";

import { profileLinks } from "../../constants/links";
import TwitterIcon from "../../images/icons/twitter-icon";

export default function Twitter() {
  return (
    <a href={profileLinks.twitter} target="_blank" rel="noreferrer">
      <div className="w-4 h-4 fill-zinc-400">
        <TwitterIcon />
      </div>
    </a>
  );
}
