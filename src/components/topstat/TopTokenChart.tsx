/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useMemo } from "react";
// import Highcharts from "highcharts/es-modules/masters/highcharts.src";
import HighchartsReact from "highcharts-react-official";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@bedrock-layout/use-media-query";
import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";
import Highcharts from "highcharts";
import wordcloud from "highcharts/modules/wordcloud";

wordcloud(Highcharts);

interface ChartProps {
  backgroundColor?: string;
}

export const TopTokenChart: FC<ChartProps> = ({ backgroundColor }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const { theme } = useTheme();

  const data = [
    {top:1, name: "VPC", weight: 235489 },
    {top:2, name: "USDV", weight: 154093 },
    {top:3, name: "SHIB", weight: 100789 },
    {top:4, name: "PEPE", weight: 81917 },
    {top:5, name: "DOGER", weight: 19867 },
    {top:6, name: "XEN", weight: 10873 },
    {top:7, name: "VINACHAIN", weight: 8097 },
  ];

  const options = {
    series: [
      {
        colors: ["#2caffe", "#544fc5", "#00e272", "#d568fb"],
        type: "wordcloud",
        data: data,
        name: "Count",
      },
    ],
    title: {
      text: "",
    },
    chart: {
      height: 330,
      margin: 15,
      type: "line",
    },
    tooltip:{
      backgroundColor: isDarkTheme(theme) ? "#19181866" : "#ffff",
      borderColor: isDarkTheme(theme) ? "#FAFAFA" : "#333",
      borderWidth: 1,
      shadow: false,
      useHTML: true,
      headerFormat: "",
      pointFormat: ` <span>Top</span> <span style="font-weight:600">{point.top}</span> <span>Token: </span> <strong>{point.name}</strong> <br/> <div style="border-bottom:1pt solid; margin: 8px 0;${
        isDarkTheme(theme) ? "border-color:#ffff" : "border-color:#2f2f3033"
      }  "></div> Address: <span style="font-weight:600; margin-left:30px">VPC</span> <div style="border-bottom:1pt solid; margin: 8px 0;${
        isDarkTheme(theme) ? "border-color:#ffff" : "border-color:#2f2f3033"
      }  "></div>  Total transaction: <span style="font-weight:600; margin-left:20px">{point.weight}</span>`,
      style: {
        color: isDarkTheme(theme) ? "#FAFAFA" : "#333",
      },
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"chart"}
        options={options}
      />
    </div>
  );
};
