/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { DownloadIcon } from "@/assets/icons/DownloadIcon";
import { FilterIcon } from "@/assets/icons/FilterIcon";
import { useTheme } from "@/hooks/useTheme";
import { Integration } from "@/models/commonn";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_PAGE_SIZE,
  PAGINATION_OPTIONS,
  THEME,
  vinachainAddress,
} from "@/utils/constants";
import classNames from "classnames";
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { Dropdown } from "../Dropdown";
import { DropdownAddress } from "../DropdownAddress";
import { Pagination } from "../Pagination";
import { generateRandomEthereumAddress } from "@/utils/formatTrxId";

const defaultData = [
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
  {
    id: "",
    txnHash: `${generateRandomEthereumAddress()?.slice(0, 9)}`,
    method: "transfer",
    block: "Block",
    age: "12 second ago",
    from: vinachainAddress,
    to: "Maestro: Router 2",
    value: "0.089 USDC",
    txnFee: "0.00877339",
  },
];
interface DataTableProps {
  columns: Array<ColumnDef<any, any>>;
  columnsVisibility?: Array<any>;
  // fetchData: (
  //   paginate: PaginationQuery,
  //   // query?: FilterType,
  // ) => Promise<{ rows: Array<any>; total: number }>;
  defaultHeaderTable?: boolean;
  childrenHeaderTable?: ReactNode;
  showPagination?: boolean;
  viewMore?: ReactNode;
  isFilter?: boolean;
  isDownloadData?: boolean;
  data?: any[];
  infoMore?: ReactNode;
  childrenHeaderTableRight?: ReactNode;
  className?: string;
  headerClassName?:string
  tableClassName?:string
}

export const DataTable: FC<DataTableProps> = ({
  columns,
  // fetchData,
  defaultHeaderTable = true,
  childrenHeaderTable,
  showPagination = true,
  viewMore,
  isFilter,
  isDownloadData,
  data = defaultData,
  infoMore,
  childrenHeaderTableRight,
  className,
  headerClassName,
  tableClassName
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const limit = searchParams.get("limit");
  // const filters = searchParams.get("filters");
  const offset = searchParams.get("offset");
  // const { filter, limit } = router.query;
  const [loading, setLoading] = useState(true);
  const [{ items, totalCount }, setData] = useState<{
    items: Integration[];
    totalCount: number;
  }>({
    items: [],
    totalCount: 0,
  });
  const [itemOffset, setItemOffset] = useState(0);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: DEFAULT_PAGE_NUMBER,
    pageSize: DEFAULT_PAGE_SIZE,
  });
  const [activePage, setActivePage] = useState<{ [key: string]: boolean }>({
    prev: true,
  });
  const isParseUrlDone = useRef<boolean>(false);

  const paginate = {
    limit: pageSize,
    offset: itemOffset,
    sort: "-createdAt",
  };

  useEffect(() => {
    if (pathname) {
      if (!limit || !offset) {
        // persistToUrl();
      } else {
        setItemOffset(Number(offset as string));
        setPagination({
          pageIndex: Number(offset as string) / Number(limit as string),
          pageSize: Number(limit as string),
        });
      }
      isParseUrlDone.current = true;
    }
  }, [pathname]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: data,
    columns,
    manualFiltering: true,
    manualPagination: true,
    pageCount: Math.ceil(totalCount / pageSize),
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    isParseUrlDone.current = true;
  }, [
    table,
    pageSize,
    pageIndex,
    itemOffset,
    pathname,
    // isRefresh,
  ]);

  const persistToUrl = () => {
    const queryParams = {
      sort: "-createdAt",
      limit: pageSize.toString(),
      offset: itemOffset.toString(),
    };

    const queryString = new URLSearchParams(queryParams).toString();

    router.push(`${pathname}?${queryString}`);

    return { queryString };
  };

  const resetPagination = () => {
    if (itemOffset !== 0 || pageIndex !== DEFAULT_PAGE_NUMBER) {
      setItemOffset(0);
      setPagination({
        pageIndex: DEFAULT_PAGE_NUMBER,
        pageSize: Number(limit),
      });
    }
  };

  const handleChangePageSize = (value: string) => {
    resetPagination();
    setPagination({
      pageIndex: DEFAULT_PAGE_NUMBER,
      pageSize: Number(value),
    });
  };

  const handlePrevPage = () => {
    setActivePage({ prev: true });
  };

  const handleNextPage = () => {
    setActivePage({ next: true });
  };

  return (
    <div className={`flex flex-wrap rounded-3xl `}>
      <div className="w-full max-w-full flex-0 ">
        <div className={`relative flex flex-col min-w-0 break-words bg-white dark:bg-[#111111] rounded-2xl  border border-[#bdc5d133] bg-clip-border ${className}`}>
          <div className="fixed-columns">
            {infoMore && infoMore}
            {defaultHeaderTable ? (
              <div className={`flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between p-4 md:p-5 pb-8 ${headerClassName}`}>
                <div> {childrenHeaderTable && childrenHeaderTable}</div>
                <div className=" flex flex-col md:flex-row  md:items-center justify-end gap-2">
                  {isDownloadData && (
                    <button className="whitespace-nowrap h-[28.8px] w-fit flex items-center justify-center gap-2 text-[12.5px] text-dark900 dark:text-gray200 border border-[#bdc5d133] hover:bg-[#eaecef] font-light dark:hover:bg-[#222] py-1 px-2 rounded-md">
                      <DownloadIcon />
                      Download Page Data
                    </button>
                  )}
                  {showPagination && (
                    <Pagination
                      prevPageStyle={`${
                        activePage.prev
                          ? "text-secondary dark:text-secondaryDark"
                          : "text-[#666666] dark:text-[#C4C4C4]"
                      }`}
                      nextPageStyle={`${
                        activePage.next
                          ? "text-secondary dark:text-secondaryDark"
                          : "text-[#666666] dark:text-[#C4C4C4]"
                      }`}
                      currentPage={1}
                      totalPage={2}
                      onClickPrevPage={handlePrevPage}
                      onClickNextPage={handleNextPage}
                    />
                  )}
                  {isFilter && (
                    <DropdownAddress defaultValue={<FilterIcon />} />
                  )}
                  {childrenHeaderTableRight && childrenHeaderTableRight}
                </div>
              </div>
            ) : (
              ""
            )}
            <div className={`overflow-x-auto ${tableClassName}`}>
              <div
                className={classNames(
                  `scrollbar ${
                    theme === THEME.DARK ? "dark" : ""
                  }  overflow-auto pb-2`
                )}
              >
                <table className="table table-flush dataTable-table ">
                  <thead className="thead-light">
                    {table.getHeaderGroups().map((headerGroup, index) => (
                      <tr key={index} >
                        {headerGroup.headers.map((header, index) => (
                          <th
                            className={`${index === 0 ? "w-[20px]" : ""}`}
                            key={index}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  {/* {!loading && ( */}
                  <tbody>
                    {table.getRowModel().rows.map((row, index) => (
                      <tr key={index}>
                        {row.getVisibleCells().map((cell, index) => (
                          <td
                            key={index}
                            className={`${index === 0 ? "w-[20px]" : ""} `}
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  {/* )} */}
                </table>
              </div>
            </div>
            {/* {loading ? (
                  <div className="w-full top-1/2 flex justify-center my-5">
                    {"Loading"} ...
                  </div>
                ) : ( */}
            {data.length === 0 && (
              <div className="top-1/2 left-1/2 right-1/2 text-[14.5px] text-dark900 dark:text-[#F5F5F5] py-4 flex justify-center">
                {"No data available in table"}
              </div>
            )}
            {showPagination ? (
              <div className="px-4 relative">
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between relative mt-5 pb-12 md:pb-2">
                  <div className="flex md:block md:justify-center items-center">
                    <span className="text-gray550 dark:text-[#888] text-[14.5px]">
                      {t("show")}&nbsp;
                    </span>
                    <Dropdown
                      reverse
                      defaultValue={
                        PAGINATION_OPTIONS.filter(
                          ({ value }) => Number(value) === pageSize
                        )[0]
                      }
                      options={PAGINATION_OPTIONS}
                      onChange={handleChangePageSize}
                      className="dark:bg-[#111111] dark:text-[#FAFAFA] dark:border-[0.2px] dark:border-[#DCDCDC]"
                    />
                    &nbsp;
                  </div>

                  <Pagination
                    prevPageStyle={`${
                      activePage.prev
                        ? "text-secondary dark:text-secondaryDark"
                        : "text-[#666666] dark:text-[#C4C4C4]"
                    }`}
                    nextPageStyle={`${
                      activePage.next
                        ? "text-secondary dark:text-secondaryDark"
                        : "text-[#666666] dark:text-[#C4C4C4]"
                    }`}
                    currentPage={1}
                    totalPage={2}
                    onClickPrevPage={handlePrevPage}
                    onClickNextPage={handleNextPage}
                  />
                </div>
              </div>
            ) : (
              viewMore
            )}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
