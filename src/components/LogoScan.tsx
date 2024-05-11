"use client";

import { useTheme } from "@/hooks/useTheme";
import { getStaticURL } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export const LogoScan = () => {
  const { theme } = useTheme();
  return (
    <img
      src={`${getStaticURL()}/assets/images/logo_scan_${theme}.svg`}
      alt="metamask"
      className=" h-10"
    />
  );
};
