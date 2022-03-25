import React from "react";

import { profileLinks } from "../../constants/links";
import LinkedinIcon from "../../images/icons/linkedin-icon";

export default function LinkedIn() {
  return (
    <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
      <div className="w-3 h-3 fill-zinc-400">
        <LinkedinIcon />
      </div>
    </a>
  );
}
