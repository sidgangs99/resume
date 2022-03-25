import React from "react";

import { mails } from "../../constants/links";
import { mail } from "../../constants/messages";
import MailIcon from "../../images/icons/mail-icon";

export default function Mail() {
  return (
    <a
      href={`mailto:${mails.gmail}?subject=${mail.subject}&body=${mail.body}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-4 h-4 fill-zinc-400">
        <MailIcon />
      </div>
    </a>
  );
}
