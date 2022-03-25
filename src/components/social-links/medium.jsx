import React from "react";

import { profileLinks } from "../../constants/links";
import MediumIcon from "../../images/icons/medium-icon";

export default function Medium() {
  return (
    <a href={profileLinks.medium} target="_blank" rel="noreferrer">
      <div className="w-5 h-5 fill-zinc-400">
        <MediumIcon />
      </div>
    </a>
  );
}
