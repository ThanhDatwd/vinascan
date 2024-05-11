import React from "react";

export const TransactionIcon = ({ color }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill="#D9D9D9" d="M0 0H24V24H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        d="M12 20.918c-1.664 0-3.173-.412-4.53-1.236a8.857 8.857 0 01-3.19-3.31v2.544H3v-4.693h4.693v1.28H5.269c.617 1.243 1.53 2.243 2.736 3A7.37 7.37 0 0012 19.638a7.481 7.481 0 002.94-.58 7.712 7.712 0 002.403-1.58 7.778 7.778 0 001.655-2.366c.416-.91.64-1.89.673-2.94h1.28a8.663 8.663 0 01-.76 3.41 9.143 9.143 0 01-1.93 2.781 8.978 8.978 0 01-2.822 1.872 8.728 8.728 0 01-3.439.683zm-.604-3.15V16.69c-.624-.145-1.144-.405-1.558-.778-.414-.373-.731-.876-.952-1.51l1.08-.439c.203.556.494.978.873 1.267.38.289.809.433 1.29.433a2.41 2.41 0 001.307-.363c.386-.243.58-.631.58-1.166 0-.445-.167-.8-.499-1.064-.332-.264-.951-.563-1.858-.895-.877-.316-1.51-.668-1.898-1.059-.389-.39-.583-.906-.583-1.547 0-.55.199-1.054.596-1.511.397-.458.952-.75 1.665-.875V6.15h1.165v1.034c.48.037.92.218 1.323.54.404.324.694.713.873 1.167l-1.054.423a2.087 2.087 0 00-.628-.788c-.273-.21-.631-.315-1.075-.315-.53 0-.947.126-1.248.378a1.218 1.218 0 00-.452.98c0 .403.147.717.441.941.295.224.89.49 1.787.796 1.024.37 1.712.784 2.064 1.244.353.46.529.987.529 1.585 0 .407-.075.764-.226 1.071-.15.308-.347.566-.59.776-.243.209-.52.374-.83.496-.31.121-.628.207-.957.256v1.034h-1.165zM3.05 11.746c.039-1.24.3-2.391.786-3.455a8.95 8.95 0 014.764-4.625A8.76 8.76 0 0112 3c1.648 0 3.158.413 4.53 1.24a8.596 8.596 0 013.19 3.34V5.002H21v4.693h-4.692v-1.28h2.423c-.6-1.221-1.506-2.215-2.715-2.983C14.806 4.664 13.468 4.28 12 4.28c-1.023 0-1.99.19-2.902.57A7.784 7.784 0 006.69 6.416a7.778 7.778 0 00-1.675 2.358c-.424.91-.653 1.9-.686 2.973H3.05z"
        fill={color || "#333"}
      />
    </g>
  </svg>
);
