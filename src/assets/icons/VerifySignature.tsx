import classNames from "classnames";

export const VerifySignature = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_51_288"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_51_288)">
          <path
            d="M17.2367 20C17.0658 20 16.9196 19.9371 16.7979 19.8113C16.6762 19.6855 16.6154 19.5343 16.6154 19.3576V15.8704C16.6154 15.6938 16.6762 15.5426 16.7979 15.4168C16.9196 15.291 17.0658 15.2281 17.2367 15.2281H17.7692V14.4327C17.7692 13.9897 17.9185 13.6138 18.2171 13.3052C18.5157 12.9965 18.8792 12.8421 19.3077 12.8421C19.7362 12.8421 20.0997 12.9965 20.3983 13.3052C20.6969 13.6138 20.8462 13.9897 20.8462 14.4327V15.2281H21.3787C21.5496 15.2281 21.6958 15.291 21.8175 15.4168C21.9392 15.5426 22 15.6938 22 15.8704V19.3576C22 19.5343 21.9392 19.6855 21.8175 19.8113C21.6958 19.9371 21.5496 20 21.3787 20H17.2367ZM18.1538 15.2281H20.4615V14.4327C20.4615 14.1014 20.3494 13.8197 20.125 13.5877C19.9006 13.3557 19.6282 13.2398 19.3077 13.2398C18.9872 13.2398 18.7147 13.3557 18.4904 13.5877C18.266 13.8197 18.1538 14.1014 18.1538 14.4327V15.2281Z"
            fill="currentColor"
          />
          <path
            d="M9.73521 11.9938C10.8585 11.1197 11.747 10.153 12.4009 9.09367C13.0547 8.03432 13.3817 6.98731 13.3817 5.95263C13.3817 5.32632 13.2724 4.82675 13.054 4.45395C12.8356 4.08114 12.5468 3.89474 12.1879 3.89474C11.4374 3.89474 10.8116 4.49323 10.3107 5.69023C9.80967 6.88722 9.55917 8.36899 9.55917 10.1355C9.55917 10.5049 9.57471 10.843 9.60577 11.1498C9.63683 11.4567 9.67998 11.738 9.73521 11.9938ZM2.75444 18.2105V16.9028H3.87869V18.2105H2.75444ZM5.55029 18.2105V16.9028H6.67456V18.2105H5.55029ZM8.34615 18.2105V16.9028H9.47042V18.2105H8.34615ZM11.142 18.2105V16.9028H12.2663V18.2105H11.142ZM13.9379 18.2105V16.9028H15.0621V18.2105H13.9379ZM2.52958 14.8897L2 14.2737L3.23077 12.8421L2 11.4105L2.52958 10.7945L3.76035 12.2261L4.99112 10.7945L5.52071 11.4105L4.28994 12.8421L5.52071 14.2737L4.99112 14.8897L3.76035 13.4581L2.52958 14.8897ZM11.0888 14.6316C10.7042 14.6316 10.3639 14.5258 10.0681 14.3141C9.7722 14.1025 9.52861 13.7856 9.33729 13.3635C9.03649 13.5722 8.72115 13.7644 8.39127 13.9399C8.06139 14.1154 7.72189 14.2852 7.37279 14.4492L7.1006 13.6147C7.43984 13.4541 7.77292 13.2823 8.09985 13.0993C8.42677 12.9164 8.73915 12.7222 9.03698 12.5169C8.95316 12.1888 8.89029 11.8223 8.84837 11.4174C8.80646 11.0125 8.7855 10.5749 8.7855 10.1045C8.7855 8.01453 9.10405 6.30794 9.74114 4.98477C10.3782 3.66159 11.1938 3 12.1879 3C12.7756 3 13.249 3.26985 13.608 3.80956C13.967 4.34926 14.1465 5.0705 14.1465 5.97328C14.1465 7.19838 13.7749 8.41718 13.0318 9.62966C12.2887 10.8421 11.2806 11.925 10.0074 12.8782C10.1366 13.1662 10.2936 13.3821 10.4786 13.5261C10.6635 13.67 10.8713 13.742 11.1021 13.742C11.5143 13.742 11.9514 13.5132 12.4135 13.0555C12.8755 12.5978 13.2909 11.9835 13.6598 11.2127L14.324 11.5774C14.254 12.0489 14.2278 12.4636 14.2456 12.8215C14.2633 13.1794 14.3486 13.4868 14.5015 13.7437C14.6691 13.6462 14.8296 13.5338 14.983 13.4065C15.1363 13.2791 15.3225 13.0641 15.5414 12.7612L16.1465 13.3239C15.8131 13.746 15.5049 14.0695 15.2219 14.2943C14.9389 14.5192 14.6706 14.6316 14.4172 14.6316C14.1874 14.6316 13.9889 14.481 13.8218 14.1799C13.6546 13.8788 13.5399 13.5 13.4778 13.0434C13.1681 13.5309 12.7929 13.9175 12.3521 14.2031C11.9112 14.4888 11.4901 14.6316 11.0888 14.6316Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
};