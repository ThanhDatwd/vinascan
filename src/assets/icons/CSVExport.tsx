import classNames from "classnames";

export const CSVExportIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_51_74"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_51_74)">
          <path
            d="M21.0692 17.1889V15.1966C21.0692 14.092 20.1738 13.1966 19.0692 13.1966H13.7737L14.3134 12.7229H19.5423C20.6469 12.7229 21.5423 13.6183 21.5423 14.7229V17.6627C21.5423 18.7672 20.6469 19.6627 19.5423 19.6627H4.45801C3.35344 19.6627 2.45801 18.7672 2.45801 17.6627V14.7229C2.45801 13.6183 3.35344 12.7229 4.45801 12.7229H9.68692L10.1496 13.1966H4.93111C3.82654 13.1966 2.93111 14.092 2.93111 15.1966V17.1889C2.93111 18.2935 3.82654 19.1889 4.93111 19.1889H19.0692C20.1738 19.1889 21.0692 18.2935 21.0692 17.1889Z"
            fill="currentColor"
          />
          <path
            d="M12.5 4.19287C12.5 3.91673 12.2761 3.69287 12 3.69287C11.7239 3.69287 11.5 3.91673 11.5 4.19287L12.5 4.19287ZM11.6464 13.5103C11.8417 13.7055 12.1583 13.7055 12.3536 13.5103L15.5355 10.3283C15.7308 10.133 15.7308 9.81646 15.5355 9.62119C15.3403 9.42593 15.0237 9.42593 14.8284 9.62119L12 12.4496L9.17157 9.62119C8.97631 9.42593 8.65973 9.42593 8.46447 9.62119C8.2692 9.81646 8.2692 10.133 8.46447 10.3283L11.6464 13.5103ZM11.5 4.19287L11.5 13.1567L12.5 13.1567L12.5 4.19287L11.5 4.19287Z"
            fill="currentColor"
          />
          <circle cx="19.7346" cy="16.1206" r="0.650602" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
};
