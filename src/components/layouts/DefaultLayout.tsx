"use client";

import { useState } from "react";

import Header from "./Header";
import "../../../i18n";
import { Footer } from "./Footer";
import { VinachainFooter } from "@/utils/constants";
import { FooterScan } from "./FooterScan";

export const DefaultLayout = ({
  children,
  pageTitle,
  containerStyle,
  tootlipStyle,
  headerStyle,
}: {
  children: React.ReactNode;
  pageTitle?: string;
  containerStyle: string;
  tootlipStyle?: string;
  headerStyle?: string;
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      event.preventDefault();
      // Xử lý sự kiện tại đây
      document.getElementById("input-search")?.focus();
    }
  };

  return (
    <main
      className={`ease-soft-in-out relative h-full transition-all duration-200 ${containerStyle}`}
    >
      <div className="w-full" onKeyDown={handleKeyPress} tabIndex={50}>
        <Header tootlipStyle={tootlipStyle} headerStyle={headerStyle} />
        <div
          className="relative pt-20 w-full mx-auto max-w-[1504px] min-h-[90vh] pb-4"
          id="box"
        >
          {children}
        </div>
        {/* <Footer footerData={VinachainFooter} /> */}
        <FooterScan />
      </div>
    </main>
  );
};
