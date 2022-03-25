import * as React from "react";

const strokeColor = "#a1a1aa";
const MediumIcon = (props) => (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="none" d="M0 0h256v256H0z" />
    <ellipse
      cx={72}
      cy={128}
      fill="none"
      rx={56}
      ry={60}
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <ellipse
      cx={184}
      cy={128}
      fill="none"
      rx={24}
      ry={56}
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M240 72v112"
    />
  </svg>
);

export default MediumIcon;
