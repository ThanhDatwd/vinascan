import classNames from "classnames";

export const LookUpIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_51_232"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="25"
        >
          <rect
            x="0.168945"
            y="0.218994"
            width="24"
            height="24"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_51_232)">
          <path
            d="M10.1689 16.2574C11.8356 16.2574 13.2523 15.6722 14.4189 14.5018C15.5856 13.3314 16.1689 11.9102 16.1689 10.2382C16.1689 8.56622 15.5856 7.14501 14.4189 5.97459C13.2523 4.80419 11.8356 4.21899 10.1689 4.21899C8.50228 4.21899 7.08561 4.80419 5.91895 5.97459C4.75228 7.14501 4.16895 8.56622 4.16895 10.2382C4.16895 11.9102 4.75228 13.3314 5.91895 14.5018C7.08561 15.6722 8.50228 16.2574 10.1689 16.2574ZM9.66895 12.8151V6.85359H10.6689V12.8151H9.66895ZM6.3228 12.8151V8.75744H7.3228V12.8151H6.3228ZM13.0151 12.8151V9.71899H14.0151V12.8151H13.0151ZM20.8295 20.8603C20.6375 21.0576 20.3213 21.0598 20.1266 20.8651L14.767 15.5055C14.1478 16.0389 13.4462 16.4578 12.6621 16.7623C11.8781 17.0668 11.047 17.219 10.1689 17.219C8.21478 17.219 6.55957 16.5412 5.20332 15.1855C3.84707 13.8299 3.16895 12.1754 3.16895 10.222C3.16895 8.26873 3.84677 6.61322 5.20242 5.25552C6.55809 3.89784 8.21258 3.21899 10.1659 3.21899C12.1192 3.21899 13.7747 3.89712 15.1324 5.25337C16.4901 6.60962 17.1689 8.26483 17.1689 10.219C17.1689 11.0971 17.0167 11.9282 16.7122 12.7122C16.4077 13.4962 15.9888 14.1914 15.4555 14.7978L20.8247 20.167C21.0156 20.3579 21.0177 20.6668 20.8295 20.8603V20.8603Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
};