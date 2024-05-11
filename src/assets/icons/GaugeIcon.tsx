import classNames from "classnames";

export const GaugeIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4_209"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="210"
          height="210"
        >
          <rect width="210" height="210" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4_209)">
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M105 37.5C106.105 37.5 107 38.3954 107 39.5V129.11C116 130.105 123 137.735 123 147C123 156.941 114.941 165 105 165C95.0589 165 87 156.941 87 147C87 137.735 94.0001 130.105 103 129.11V39.5C103 38.3954 103.895 37.5 105 37.5ZM105 162C113.284 162 120 155.284 120 147C120 138.716 113.284 132 105 132C96.7157 132 90 138.716 90 147C90 155.284 96.7157 162 105 162Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M193 105C193 153.601 153.601 193 105 193C56.3989 193 17 153.601 17 105C17 56.3989 56.3989 17 105 17C153.601 17 193 56.3989 193 105ZM189 105C189 151.392 151.392 189 105 189C58.6081 189 21 151.392 21 105C21 58.6081 58.6081 21 105 21C151.392 21 189 58.6081 189 105Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M76 55C76 58.3137 73.3137 61 70 61C66.6863 61 64 58.3137 64 55C64 51.6863 66.6863 49 70 49C73.3137 49 76 51.6863 76 55Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M61 95C61 98.3137 58.3137 101 55 101C51.6863 101 49 98.3137 49 95C49 91.6863 51.6863 89 55 89C58.3137 89 61 91.6863 61 95Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M161 95C161 98.3137 158.314 101 155 101C151.686 101 149 98.3137 149 95C149 91.6863 151.686 89 155 89C158.314 89 161 91.6863 161 95Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M146 55C146 58.3137 143.314 61 140 61C136.686 61 134 58.3137 134 55C134 51.6863 136.686 49 140 49C143.314 49 146 51.6863 146 55Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
