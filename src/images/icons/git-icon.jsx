import * as React from "react";

const GitIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.562 10.932h-.001L13.06.426c-.566-.568-1.557-.568-2.122 0L.44 10.931c-.283.284-.439.66-.439 1.06 0 .401.156.779.44 1.062L10.937 23.56c.284.284.66.44 1.062.44s.778-.156 1.06-.44l10.5-10.506c.284-.283.44-.66.44-1.061 0-.4-.156-.777-.438-1.061z"
      fill="#EF473B"
    />
    <path
      d="m23.681 12.69-10.61 10.616c-.285.286-.665.444-1.071.444s-.786-.158-1.073-.445L.32 12.69a1.513 1.513 0 0 1-.292-.422c.054.296.195.569.412.786l10.5 10.506c.283.284.66.44 1.061.44s.778-.156 1.06-.44l10.5-10.506a1.49 1.49 0 0 0 .413-.786 1.513 1.513 0 0 1-.292.422z"
      fill="#010101"
      opacity={0.1}
    />
    <path
      d="M17 10c-.375 0-.722.11-1.022.29L13.71 8.022c.18-.3.29-.647.29-1.022 0-1.103-.897-2-2-2-.37 0-.712.108-1.01.284L8.536 2.83l-.706.707 2.453 2.454C10.108 6.288 10 6.63 10 7c0 .93.64 1.705 1.5 1.929v6.142c-.86.224-1.5 1-1.5 1.929 0 1.103.897 2 2 2s2-.897 2-2c0-.93-.64-1.705-1.5-1.929V8.93c.177-.046.343-.116.497-.206l2.28 2.28A1.976 1.976 0 0 0 15 12c0 1.103.897 2 2 2s2-.897 2-2-.897-2-2-2z"
      fill="#FFF"
    />
    <path
      d="M.438 11.182 10.94.675c.565-.567 1.556-.567 2.123 0L23.56 11.183c.253.254.397.583.427.936.003-.042.012-.083.012-.125 0-.4-.156-.777-.438-1.061h-.001L13.06.426c-.566-.568-1.557-.568-2.122 0L.44 10.931c-.283.284-.439.66-.439 1.06 0 .043.009.084.012.126.03-.353.174-.682.426-.936z"
      fill="#FFF"
      opacity={0.2}
    />
    <linearGradient
      gradientUnits="userSpaceOnUse"
      id="a"
      x1={9.669}
      x2={18.307}
      y1={9.676}
      y2={18.313}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#010101",
          stopOpacity: 0.1,
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#010101",
          stopOpacity: 0,
        }}
      />
    </linearGradient>
    <path
      d="M18.549 10.75c.278.344.451.775.451 1.25 0 1.103-.897 2-2 2s-2-.897-2-2c0-.365.105-.702.277-.997l-2.28-2.28c-.154.09-.32.16-.497.206v6.142c.86.224 1.5 1 1.5 1.929 0 1.103-.897 2-2 2-.511 0-.974-.199-1.328-.516l3.732 3.732 7.803-7.808-3.658-3.658zm-4.84-2.728 2.269 2.268c.3-.18.647-.29 1.022-.29.475 0 .906.174 1.25.451l-4.678-4.677-.002.002c.265.34.43.76.43 1.224 0 .375-.11.722-.29 1.022z"
      fill="url(#a)"
    />
    <linearGradient
      gradientUnits="userSpaceOnUse"
      id="b"
      x1={2.014}
      x2={21.983}
      y1={7.34}
      y2={16.652}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fff",
          stopOpacity: 0.2,
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#fff",
          stopOpacity: 0,
        }}
      />
    </linearGradient>
    <path
      d="M23.562 10.932h-.001L13.06.426c-.566-.568-1.557-.568-2.122 0L.44 10.931c-.283.284-.439.66-.439 1.06 0 .401.156.779.44 1.062L10.937 23.56c.284.284.66.44 1.062.44s.778-.156 1.06-.44l10.5-10.506c.284-.283.44-.66.44-1.061 0-.4-.156-.777-.438-1.061z"
      fill="url(#b)"
    />
  </svg>
);

export default GitIcon;
