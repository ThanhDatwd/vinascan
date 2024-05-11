import { useTheme } from "@/hooks/useTheme";
import { generateRandomEthereumAddress } from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TooltipCustom } from "../Tooltip";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { convertNumberToFormattedString } from "@/utils/converter";
import { t } from "i18next";
const contracts = [
  "USDV Stablecoin",
  "Uniswap: Universal Router",
  "Scroll: L1 Scroll Messenger Proxy",
  "Circle: USDV Token",
  "Banana Gun: Router 2",
  "Pendle: Router V3",
];
const methods = ["Transfer", "Execute", "Approve", "Send", "Message","Mint With Sig","Claim Dop","Deposit Transaction","Swap"];

const generateRandomBlock = (_: any, index: number) => ({
  id: index + 1,
  timestamp: `${Math.floor(Math.random() * 60)} seconds ago`,
  contract: {
    publicTag: contracts[Math.floor(Math.random() * contracts.length)],
    address: generateRandomEthereumAddress(),
  },
  method: methods[Math.floor(Math.random() * methods.length)],
  transactions: Math.random() * 10000 + 1000,
  uniqueAddresses: Math.random() * 10000 + 1000,
});
const defaultData = Array.from({ length: 50 }, generateRandomBlock);

const ANALYTIC_TIME = [
  {
    label: "5 " + t("min"),
    value: "five_mins",
  },
  {
    label: "1 " + t("hours"),
    value: "one_hour",
  },
  {
    label: "3 " +  t("hours"),
    value: "three_hours",
  },
  {
    label: "12 " +  t("hours"),
    value: "twelve_hours",
  },
];
const renderRankIcon = (rank:number) =>{
switch (rank) {
  case 1:
    return "🥇"
    case 2:
      return "🥈"
      case 3:
        return "🥉"
      
  default:
    break;
}
}
export const HotContractTab = () => {
  const [currentAnalyticTime, setCurrentAnalyticTime] = useState(
    ANALYTIC_TIME[0].value
  );
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();
  const [isHovered, setIsHovered] = useState(false);

  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => (
        <HeaderTable
          textStyle=" dark:text-gray200"
          text={t("topStatPage.hotContractTab.rank")}
        />
      ),
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={<div className="text-right" >{renderRankIcon(getValue())} {getValue()}</div>}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.contract, {
      id: "contract",
      header: () => <HeaderTable text={t("topStatPage.hotContractTab.contract")} textStyle="" />,
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center cursor-pointer">
                <TooltipCustom position="right" content={getValue()?.address}>
                  <Link
                    href={`/address/${getValue()?.address}`}
                    className="link-color px-2 rounded-md  duration-150 ease-in-out"
                  >
                    {getValue()?.publicTag}
                  </Link>
                </TooltipCustom>
              </div>
            </div>
          }
          className="text-[14.5px] text-dark900 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.method, {
      id: "method",
      header: () => (
        <HeaderTable textStyle=" dark:text-gray200" text={t("topStatPage.hotContractTab.function")} />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={getValue()}
          className="text-[12.5px] text-gray550 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.transactions, {
      id: "transactions",
      header: () => (
        <HeaderTable text={t("topStatPage.hotContractTab.transactions")} textStyle="dark:text-gray200" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={<div className="text-[14.5px]">{convertNumberToFormattedString(getValue().toFixed(3))}</div>}
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.uniqueAddresses, {
      id: "uniqueAddresses",
      header: () => (
        <HeaderTable text={t("topStatPage.hotContractTab.uniqueAddresses")}textStyle="dark:text-gray200" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={<div className="text-[14.5px]">{convertNumberToFormattedString(getValue().toFixed(3))}</div>}
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div>
      <DataTable
        data={defaultData}
        // fetchData={getListFeedbacks}

        columns={columns}
        showPagination={false}
        childrenHeaderTable={
          <div className="flex gap-2">
            {ANALYTIC_TIME.map((item) => (
              <button
                key={item.value}
                onClick={()=>setCurrentAnalyticTime(item.value)}
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
        }
      />
    </div>
  );
};
