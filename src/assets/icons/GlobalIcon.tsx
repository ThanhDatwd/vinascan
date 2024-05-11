import classNames from "classnames";

export const GlobalIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        className=" stroke-current dark:text-black"
        viewBox="0 0 210 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_4_199"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="210"
          height="210"
        >
          <rect width="210" height="210" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4_199)">
          <path
            d="M105 193C153.601 193 193 153.601 193 105C193 56.3989 153.601 17 105 17M105 193C56.3989 193 17 153.601 17 105C17 56.3989 56.3989 17 105 17M105 193C135 193 150 144.526 150 105C150 65.474 135 17 105 17M105 193C75 193 60 135 60 105C60 75 75 17 105 17M25 75H185M25 135H185"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
