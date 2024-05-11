import classNames from "classnames";

export const ServerIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_4_227"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="210"
          height="210"
        >
          <rect width="210" height="210" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_4_227)">
          <path
            d="M146 65C146 68.3137 143.314 71 140 71C136.686 71 134 68.3137 134 65C134 61.6863 136.686 59 140 59C143.314 59 146 61.6863 146 65Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M165 71C168.314 71 171 68.3137 171 65C171 61.6863 168.314 59 165 59C161.686 59 159 61.6863 159 65C159 68.3137 161.686 71 165 71Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M37 35C25.9543 35 17 43.9543 17 55V75C17 86.0457 25.9543 95 37 95H173C184.046 95 193 86.0457 193 75V55C193 43.9543 184.046 35 173 35H37ZM173 39H37C28.1634 39 21 46.1634 21 55V75C21 83.8366 28.1634 91 37 91H173C181.837 91 189 83.8366 189 75V55C189 46.1634 181.837 39 173 39Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M146 145C146 148.314 143.314 151 140 151C136.686 151 134 148.314 134 145C134 141.686 136.686 139 140 139C143.314 139 146 141.686 146 145Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M165 151C168.314 151 171 148.314 171 145C171 141.686 168.314 139 165 139C161.686 139 159 141.686 159 145C159 148.314 161.686 151 165 151Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clip-rule="evenodd"
            d="M37 115C25.9543 115 17 123.954 17 135V155C17 166.046 25.9543 175 37 175H173C184.046 175 193 166.046 193 155V135C193 123.954 184.046 115 173 115H37ZM173 119H37C28.1634 119 21 126.163 21 135V155C21 163.837 28.1634 171 37 171H173C181.837 171 189 163.837 189 155V135C189 126.163 181.837 119 173 119Z"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
