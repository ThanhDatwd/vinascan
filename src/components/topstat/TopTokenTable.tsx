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
export const TopTokenTable = ({ title,data }: IProps) => {

  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable textStyle=" dark:text-gray200" text="#" />,
      cell: ({ getValue }) => (
        <CellText
          className=" dark:text-gray200"
          text={<div> {getValue()}</div>}
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.token, {
      id: "token",
      header: () => (
        <HeaderTable textStyle=" dark:text-gray200" text={t("topStatPage.tokenTab.tokenName")} />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <Link
              href={`/address/${getValue()?.address}`}
              className="link-color rounded-md  duration-150 ease-in-out"
            >
              {getValue().name}
            </Link>
          }
          className=" text-sm text-gray550 dark:text-gray200"
        />
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor((row) => row.uniqueSenders, {
      id: "uniqueSenders",
      header: () => (
        <HeaderTable text={t("topStatPage.tokenTab.uniqueSenders")} textStyle="dark:text-gray200" />
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
        headerClassName="border-b border-b-[red] mb-4 bg-[#F8F9FA] dark:bg-gray800  rounded-t-2xl !p-4 "
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
