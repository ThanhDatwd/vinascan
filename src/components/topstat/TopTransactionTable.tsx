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

interface IProps {
  title: string;
  data:any[]
}
export const TopTransactionTable = ({ title,data }: IProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable textStyle=" dark:text-gray200" text={t("topStatPage.transactionsTab.rank")} />,
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={<div className="text-right"> {getValue()}</div>}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.contract, {
      id: "contract",
      header: () => <HeaderTable text={t("topStatPage.transactionsTab.contract")} textStyle="" />,
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
        <HeaderTable textStyle=" dark:text-gray200" text={t("topStatPage.transactionsTab.function")} />
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
        <HeaderTable text={t("topStatPage.transactionsTab.title")} textStyle="dark:text-gray200" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="text-[14.5px]">
              {convertNumberToFormattedString(getValue().toFixed(3))}
            </div>
          }
          className="text-dark900 dark:text-gray200 text-[14.5px]"
        />
      ),
      footer: (props) => props.column.id,
    }),
  ];

  return (
    <div>
      <DataTable
        data={data}
        // fetchData={getListFeedbacks}
        headerClassName="border-b border-b-[red] mb-4 bg-[#F8F9FA] dark:bg-gray800 rounded-t-2xl !p-4"
        tableClassName="px-4"
        columns={columns}
        showPagination={false}
        childrenHeaderTable={
          <div className="flex gap-2">
            <span>{title}</span>
          </div>
        }
      />
    </div>
  );
};
