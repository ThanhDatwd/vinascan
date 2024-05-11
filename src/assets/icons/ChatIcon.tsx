import classNames from "classnames";

export const ChatIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_53_296"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_53_296)">
          <path
            d="M21.6574 4.65735V15.9603C21.6574 16.8755 20.9151 17.6177 20 17.6177L10.4907 17.6853C10.2529 17.6853 10.0254 17.781 9.85971 17.9509L7.20382 21.0566C7.14927 21.1204 7.04529 21.0834 7.04324 21L7 19.4384L6.97221 18.5418C6.95779 18.0651 6.56765 17.6863 6.09 17.6863L3.65735 17.6187C2.74221 17.6187 2 16.8765 2 15.9613V4.65735C2 3.74221 2.74221 3 3.65735 3H20C20.9151 3 21.6574 3.74221 21.6574 4.65735Z"
            stroke="currentColor"
            stroke-miterlimit="10"
          />
          <rect
            x="6.01465"
            y="6.29419"
            width="10"
            height="1"
            rx="0.5"
            fill="currentColor"
          />
          <rect
            x="6.01465"
            y="8.86768"
            width="6"
            height="1"
            rx="0.5"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
};
