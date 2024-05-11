import { useTheme } from "@/hooks/useTheme";
import { convertNumberToFormattedString } from "@/utils/converter";
import { generateRandomEthereumAddress } from "@/utils/formatTrxId";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CellText } from "../tables/CellText";
import { DataTable } from "../tables/DataTable";
import { HeaderTable } from "../tables/HeaderTable";
import { TopAccountChart } from "./TopAccountChart";

interface IProps {
}
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
    gasUsed: {
        value: Math.random() * 10000 + 1000,
        percent:  Math.random() * 90 + 10,
      },
  });
  const defaultData = Array.from({ length: 10 }, generateRandomBlock);
export const TopAccountByGas = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor((row) => row.id, {
      id: "id",
      header: () => <HeaderTable textStyle=" dark:text-gray200" text={t("topStatPage.networkTab.rank")} />,
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
        <HeaderTable textStyle=" dark:text-gray200" text={t("topStatPage.networkTab.address")} />
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
    columnHelper.accessor((row) => row.gasUsed, {
      id: "gasUsed",
      header: () => (
        <HeaderTable text={t("topStatPage.networkTab.gasUsed")}textStyle="dark:text-gray200" />
      ),
      cell: ({ getValue }) => (
        <CellText
          text={
            <div className="text-[14.5px]">
              {convertNumberToFormattedString(getValue().value.toFixed(3))}&nbsp;
              ({getValue().percent.toFixed(3)}%)
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
      <div className="w-full bg-[#ffff] dark:bg-[#111] rounded-xl border border-[#DCDCDC] overflow-hidden">
        <div className="flex justify-between items-center border-b border-[#e9ecef bg-[#F8F9FA] dark:bg-gray800  p-4 ">
          <div className=" whitespace-nowrap">
            <span>{t("topStatPage.networkTab.topAccountsByGasUsed")}</span>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 lg:grid-cols-2 items-center">
          <div><TopAccountChart/></div>
          <DataTable
            data={defaultData}
            // fetchData={getListFeedbacks}
            className="!border-none"
            headerClassName="border-b border-b-[red] mb-4 bg-[#F8F9FA] dark:bg-gray800  rounded-t-2xl !p-4 !hidden "
            columns={columns}
            showPagination={false}
          />
        </div>
      </div>
    </div>
  );
};
