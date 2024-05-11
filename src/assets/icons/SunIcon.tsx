import classNames from "classnames";

export const SunIcon = ({ className, color }: { className?: string; color?: string }) => {
  return (
    <div className={classNames("w-4 h-4 ", className)}>
      <svg
        className=" stroke-current "
        viewBox="0 0 210 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_4_192"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="210"
          height="210"
        >
          <rect width="210" height="210" fill={color || "#D9D9D9"} />
        </mask>
        <g mask="url(#mask0_4_192)">
          <path
            d="M104.751 17V53.3966M156.603 105.249H192.501M104.751 157.102V193M53.3966 105.249H17M146.632 63.3683L172.015 37.9845M162.088 172.558L136.704 147.174M62.8697 63.3683L37.486 37.9845M37.4419 162.586L62.8257 137.203M144.637 105.249C144.637 127.278 126.78 145.136 104.751 145.136C82.7219 145.136 64.864 127.278 64.864 105.249C64.864 83.2205 82.7219 65.3626 104.751 65.3626C126.78 65.3626 144.637 83.2205 144.637 105.249Z"
            stroke={color || "currentColor"}
            strokeWidth="14"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
