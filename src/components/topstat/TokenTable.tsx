import { useTheme } from "@/hooks/useTheme";
import { convertNumberToFormattedString } from "@/utils/converter";
import { generateRandomEthereumAddress } from "@/utils/formatTrxId";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import { LoadingSpinner } from "../LoadingSpinner";
import { TooltipCustom } from "../Tooltip";

interface Props {}


const contracts = [
  "USDV Stablecoin",
  "Uniswap: Universal Router",
  "Scroll: L1 Scroll Messenger Proxy",
  "Circle: USDC Token",
  "Banana Gun: Router 2",
  "Pendle: Router V3",
];
const transactionName = [
    "Top VPC Sender",
    "Top VPC Receiver",
    "Top Txn Count Sent",
    "Top Txn Count Received",
  ];

const methods = ["Transfer", "Execute", "Approve", "Send", "Message"];

export const TokenTable = ({}: Props) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [loadingBlock, setLoadingBlock] = useState<boolean>(false);
  const [listBlock, setListBlock] = useState<any>([]);
  const [isHovered, setIsHovered] = useState(false);

  const generateRandomBlock = (_: any, index: number) => ({
    id: index + 1,
    timestamp: `${Math.floor(Math.random() * 60)} seconds ago`,
    contract: {
      publicTag: contracts[Math.floor(Math.random() * contracts.length)],
      address: generateRandomEthereumAddress(),
      title:transactionName[Math.floor(Math.random() * transactionName.length)],
    },
    method: methods[Math.floor(Math.random() * methods.length)],
    transactions: Math.random() * 100000,
    uniqueAddresses: Math.random() * 1000002,
  });

  const handleFetchData = async () => {
    const dataBlock: any[] = Array.from({ length: 4 }, generateRandomBlock);
    setListBlock(dataBlock);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <>
      <div className="w-full bg-[#ffff] dark:bg-[#111] rounded-xl border border-[#DCDCDC] overflow-hidden">
        <div className="flex justify-between items-center border-b border-[#e9ecef bg-[#F8F9FA] dark:bg-gray800  p-4 ">
          <div className="whitespace-nowrap">{t('topStatPage.tokenTab.title')}</div>
          <div className="">
          <div
              onClick={()=> window.location.hash ="Token" }

              className="link-color cursor-pointer rounded-md  duration-150 ease-in-out text-right"
            >
              {t('topStatPage.overviewTab.viewTop10')}
            </div>
          </div>
        </div>
        <div className="p-4">
          {listBlock.map((item: any, index: number) => (
            <div key={index}>
              <div className="w-full flex justify-between  ">
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <div className="flex flex-col">
                    <span className="text-dark900 dark:text-gray200 ">
                     {item.contract.title}
                    </span>
                    <TooltipCustom
                      content={<span>({item.contract.address})</span>}
                    >
                      <Link
                        href={`/address/${item.contract.address}`}
                        className=" text-[14.5px] link-color dark:text-scanDark mr-1"
                      >
                        {item.contract.publicTag}
                      </Link>
                    </TooltipCustom>
                  </div>
                </div>
                <div className="flex flex-col gap-1 text-right ">
                  <div className="text-[14.5px]">
                    <span className="text-dark900 dark:text-gray200 ">
                      {" "}
                      {t('topStatPage.total')} VPC
                    </span>
                    <div className="text-gray550 dark:text-gray400">
                      {convertNumberToFormattedString(
                        item.uniqueAddresses.toFixed(3)
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {index < listBlock.length - 1 && (
                <div className="w-full my-4 h-[1px] bg-[#DCDCDC] dark:bg-gray700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
