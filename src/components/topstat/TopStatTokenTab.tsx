import React, { useState } from "react";
import { TransactionTable } from "./TransactionTable";
import { NetworkTable } from "./NetworkTable";
import { TokenTable } from "./TokenTable";
import { TopTransactionTable } from "./TopTransactionTable";
import { TopTokenTable } from "./TopTokenTable";
import { generateRandomEthereumAddress } from "@/utils/formatTrxId";
import { TopTokenByTxn } from "./TopTokenByTxn";
import { getDateYesterdayToNow } from "@/utils";
import { t } from "i18next";
const ANALYTIC_TIME = [
  {
    label: "24 " + t("hours"),
    value: "24_hour",
  },
  {
    label: "3 " + t("days"),
    value: "3_day",
  },
  {
    label: "7 " + t("days"),
    value: "7_days",
  },
];

const tokens = [
  "USD (USDV)",
  "USDV (USDV)",
  "Renzo (REZ)",
  "Dai Stablecoin (DAI)",
  "SHIBA INU (SHIB)",
  "Pepe (PEPE)",
  "DOGER (DOGER)",
  "XEN Crypto (XEN)",
];

const generateRandomBlock = (_: any, index: number) => ({
  id: index + 1,
  token: {
    name: tokens[Math.floor(Math.random() * tokens.length)],
    address: generateRandomEthereumAddress(),
  },
  uniqueSenders: Math.random() * 10000 + 1000,
});
const defaultData = Array.from({ length: 10 }, generateRandomBlock);
export const TopStatTokenTab = () => {
  const [currentAnalyticTime, setCurrentAnalyticTime] = useState(
    ANALYTIC_TIME[0].value
  );
  return (
    <div className="flex flex-col bg-white dark:bg-[#111111] border border-[#bdc5d133] p-5 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 ">
          {ANALYTIC_TIME.map((item) => (
            <button
              key={item.value}
              onClick={() => setCurrentAnalyticTime(item.value)}
              className={`text-sm font-medium leading-1 duration-150 ease-linear  ${
                item.value === currentAnalyticTime
                  ? "bg-[#0784c3] dark:bg-scanDark text-[#FAFAFA]"
                  : "bg-[#e9ecef] dark:bg-[#222222] text-[#081D35] dark:text-[#CCCCCC]"
              } py-[4.8px] px-[9.6px] rounded-[8px] whitespace-nowrap`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="text-[14.5px] text-gray550 dark:text-gray200">
          {getDateYesterdayToNow()}
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <TopTokenTable
          title={t("topStatPage.tokenTab.topTokensByUniqueSenders")}
          data={Array.from({ length: 10 }, generateRandomBlock)}
        />
        <TopTokenTable
          title={t("topStatPage.tokenTab.topTokensByUniqueReceivers")}
          data={Array.from({ length: 10 }, generateRandomBlock)}
        />
        <TopTokenTable
          title={t("topStatPage.tokenTab.topTokensByTotalUniques")}
          data={Array.from({ length: 10 }, generateRandomBlock)}
        />
      </div>
      <div className="mt-8">
        <TopTokenByTxn />
      </div>
    </div>
  );
};
