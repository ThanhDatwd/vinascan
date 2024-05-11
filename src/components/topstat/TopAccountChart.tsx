import React, { FC, useEffect, useMemo, useState } from "react";
import Highcharts from "highcharts/es-modules/masters/highcharts.src";
import HighchartsReact from "highcharts-react-official";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@bedrock-layout/use-media-query";
import { useTheme } from "@/hooks/useTheme";
import { isDarkTheme } from "@/utils/theme";

interface ChartProps {
  backgroundColor?: string;
}

export const TopAccountChart: FC<ChartProps> = ({ backgroundColor }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const { theme } = useTheme();

  const data = [
    {
      name: "#1",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#2",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#3",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#4",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#5",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#6",
      y: 21.3,
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#7",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#8",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#9",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
    {
      name: "#10",
      y: Number((Math.random() * 10000000000 + 1000).toFixed(0)),
      address: "0x28218df2a8143E0D21533b3ecE267d5D66000000",
      gas: "101",
    },
  ];

  const options = useMemo(() => {
    return {
      chart: {
        type: "pie",
        backgroundColor: backgroundColor,
        height: isMobile ? "60%" : "50%",
      },
      title: "Top Accounts by Gas Used",
      tooltip: {
        backgroundColor: isDarkTheme(theme) ? "#19181866" : "#ffff",
        borderColor: isDarkTheme(theme) ? "#FAFAFA" : "#333",
        borderWidth: 1,
        shadow: false,
        useHTML: true,
        headerFormat: "",
        pointFormat: ` <span style="font-weight:600">Top Accounts by Gas Used</span> <br/> <div style="border-bottom:1pt solid; margin: 8px 0;${
          isDarkTheme(theme) ? "border-color:#ffff" : "border-color:#2f2f3033"
        }  "></div> Account: <span style="font-weight:600; margin-left:30px">{point.address}</span> <div style="border-bottom:1pt solid; margin: 8px 0;${
          isDarkTheme(theme) ? "border-color:#ffff" : "border-color:#2f2f3033"
        }  "></div>  Gas used: <span style="font-weight:600; margin-left:20px">{point.y}</span>`,
        style: {
          color: isDarkTheme(theme) ? "#FAFAFA" : "#333",
        },
      },
      accessibility: {
        enabled: false,
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          borderWidth: 1,
          innerSize: "40%",
          borderRadius: 0,
          cursor: "pointer",
          name: t("percentage"),
          dataLabels: {
            enabled: true,
            format: `<span style="stroke:none ;${
              isDarkTheme(theme) ? "fill:#888888" : "fill:#77838f"
            } ;  font-size:12px; font-weight:500; font-family:sans-serif !important;">{point.name}</span>`,
            distance: isMobile ? 10 : 30,
            style: {
              fontSize: isMobile ? "10px" : "14px",
            },
          },
          center: ["50%", "50%"],
          point: {
            events: {
              click: (e: any) => {
                const point = e.point;

                const itemsChosen = point.series.points.filter(
                  (item: any) => item.opacity === 1
                );

                if (
                  itemsChosen.length === 1 &&
                  itemsChosen[0].index === point.index
                ) {
                  point.series.points.map((chart: any) => {
                    chart.update({
                      opacity: 1,
                    });
                  });
                  return;
                }

                point.series.points.map((chart: any) => {
                  if (chart.index !== point.index) {
                    chart.update({
                      opacity: 0.2,
                    });
                  } else {
                    chart.update({
                      opacity: 1,
                    });
                  }
                });
              },
            },
          },
        },
      },
      series: [
        {
          // enableMouseTracking: true,
          colorByPoint: true,
          animation: {
            duration: 200,
          },
          plotOptions: {
            pie: {
              innerSize: "40%",
              borderRadius: 8,
            },
          },
          data: data,
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }, [backgroundColor, data]);

  useEffect(() => {
    ((H: any) => {
      H.seriesTypes.pie.prototype.animate = function (init: any) {
        const series = this;
        const chart = series.chart;
        const points = series.points;
        const { animation } = series.options;
        const { startAngleRad } = series;

        const fanAnimate = (
          point: Highcharts.Point,
          startAngleRad: number,
          depth: number
        ) => {
          if (depth > 50) {
            // Limit recursion depth to avoid maximum call stack size exceeded
            return;
          }

          const graphic = point.graphic;
          const args = point.shapeArgs;

          if (graphic && args) {
            graphic
              .attr({
                start: startAngleRad,
                end: startAngleRad,
                opacity: 1,
              })
              .animate(
                {
                  start: args.start,
                  end: args.end,
                },
                {
                  duration: animation.duration / points.length,
                },
                () => {
                  if (points[point.index + 1]) {
                    fanAnimate(points[point.index + 1], args.end, depth + 1);
                  }

                  if (point.index === series.points.length - 1) {
                    series.dataLabelsGroup.animate(
                      {
                        opacity: 1,
                      },
                      undefined,
                      () => {
                        points.forEach((point: any) => {
                          point.opacity = 1;
                        });
                      }
                    );
                  }
                }
              );
          }
        };

        if (init) {
          points.forEach((point: any) => {
            point.opacity = 0;
          });
        } else {
          fanAnimate(points[0], startAngleRad, 0);
        }
      };
    })(Highcharts);
  }, []);

  return (
    <div className="">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
