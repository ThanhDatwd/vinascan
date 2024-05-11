import classNames from "classnames";

export const UnitConverterIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
          viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_51_100"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_51_100)">
          <path
            d="M1.05763 11.8908C1.05763 10.3892 1.3449 8.97833 1.91943 7.65824C2.49396 6.33814 3.28083 5.18306 4.28001 4.19298C5.2792 3.20291 6.44492 2.42323 7.77717 1.85394C9.10942 1.28465 10.5333 1 12.0487 1C13.9139 1 15.6291 1.42078 17.1945 2.26234C18.7599 3.1039 20.0422 4.22599 21.0414 5.62859C21.0414 5.62859 21.0414 3.3596 21.0414 2.98015C21.0414 2.56042 21.6082 2.31283 22.0318 2.31283C22.4554 2.31283 23.0398 2.56042 23.0398 2.98015C23.0398 3.3596 23.0398 8.92058 23.0398 8.92058C23.0398 8.92058 17.5421 8.92058 17.0446 8.92058C16.6407 8.92058 16.3193 8.38784 16.3272 7.91306C16.3349 7.44951 16.6543 6.94044 17.0446 6.94044C17.5421 6.94044 19.5176 6.94044 19.5176 6.94044C18.7183 5.75235 17.665 4.79528 16.3577 4.06923C15.0504 3.34317 13.6141 2.98015 12.0487 2.98015C10.7997 2.98015 9.62984 3.21529 8.53905 3.68557C7.44827 4.15586 6.49904 4.79115 5.69137 5.59146C4.88369 6.39177 4.24254 7.33234 3.76793 8.41317C3.29332 9.494 3.05601 10.6532 3.05601 11.8908C3.05601 12.7094 2.51892 13.2516 2.05682 13.2516C1.59472 13.2516 1.05763 12.9742 1.05763 11.8908Z"
            fill="currentColor"
          />
          <path
            d="M23.031 12.1002C23.031 13.6018 22.7437 15.0126 22.1692 16.3327C21.5946 17.6528 20.8078 18.8079 19.8086 19.798C18.8094 20.788 17.6437 21.5677 16.3114 22.137C14.9792 22.7063 13.5553 22.9909 12.0399 22.9909C10.1747 22.9909 8.45948 22.5702 6.89408 21.7286C5.32869 20.887 4.04639 19.765 3.04721 18.3624C3.04721 18.3624 3.04721 20.6314 3.04721 21.0108C3.04721 21.4305 2.48037 21.6781 2.05679 21.6781C1.6332 21.6781 1.04883 21.4305 1.04883 21.0108C1.04883 20.6314 1.04883 15.0704 1.04883 15.0704C1.04883 15.0704 6.54653 15.0704 7.04396 15.0704C7.44786 15.0704 7.76929 15.6031 7.7614 16.0779C7.7537 16.5414 7.43435 17.0505 7.04396 17.0505C6.54653 17.0505 4.57097 17.0505 4.57097 17.0505C5.37032 18.2386 6.42363 19.1957 7.7309 19.9217C9.03817 20.6478 10.4745 21.0108 12.0399 21.0108C13.2889 21.0108 14.4588 20.7757 15.5496 20.3054C16.6403 19.8351 17.5896 19.1998 18.3972 18.3995C19.2049 17.5992 19.8461 16.6586 20.3207 15.5778C20.7953 14.497 21.0326 13.3377 21.0326 12.1002C21.0326 11.2816 21.5697 10.7393 22.0318 10.7393C22.4939 10.7393 23.031 11.0167 23.031 12.1002Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
};