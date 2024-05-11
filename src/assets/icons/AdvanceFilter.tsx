import classNames from "classnames";

export const AdvanceFilter = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_55_304"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_55_304)">
          <path
            d="M5.96644 4.8H1.84528C1.49244 4.8 1.18194 5.08938 1.05491 5.52811C0.927893 5.96685 1.02669 6.45226 1.29485 6.76031L7.34957 13.7054V18.8675C7.34957 19.0449 7.4272 19.2129 7.54716 19.2876L10.0735 20.9492C10.3064 21.1079 10.5886 20.8745 10.5886 20.5291V13.7054L12 12.0905M22.9463 3.72811C22.8148 3.28938 22.4933 3 22.128 3H7.37524C7.00989 3 6.68839 3.28938 6.55686 3.72811C6.42534 4.16685 6.52763 4.65226 6.8053 4.96031L13.0747 11.9054V17.0675C13.0747 17.2449 13.155 17.4129 13.2793 17.4876L15.8951 19.1492C16.1363 19.3079 16.4285 19.0745 16.4285 18.7291V11.9054L22.6979 4.96031C22.9756 4.65226 23.0706 4.16685 22.9463 3.72811Z"
            stroke="currentColor"
            stroke-miterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
};
