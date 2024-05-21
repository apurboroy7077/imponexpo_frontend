"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import MenubarAdminDashboard3 from "./MenubarAdminDashboard3";
import { useDashboard } from "@/configs/zustand/zustandDashboard";
import HeaderAdminDashboard3 from "./HeaderAdminDashboard3";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};
const donutOptions: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#3C50E0", "#6577F3", "#8FD0EF", "#0FADCF"],
  labels: ["Desktop", "Tablet", "Mobile", "Unknown"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};
const series = [
  {
    name: "Product One",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
  },

  {
    name: "Product Two",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
  },
];
const donutSeries = [65, 34, 12, 56];
const Dashboard3 = () => {
  return (
    <div className="bg-[#f1f5f9] p-4 lg:px-12 lg:py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map(() => {
          return (
            <div key={Math.random().toString()}>
              <div className="bg-[white] px-5 py-5 rounded shadow-lg">
                <div className="w-[2.5rem] p-[0.6rem] rounded-full bg-[#e2e8f0] active:scale-[0.95]">
                  <img
                    className="w-full"
                    src="/icons/sector-2/bell-regular.svg"
                    alt=""
                  />
                </div>
                <div className="font-bold text-xl mt-3">$3.465K</div>
                <div className="flex justify-between mt-2">
                  <div className="text-sm font-medium">Total Views</div>
                  <div className="text-sm font-medium text-[#259ae6]">
                    0.43%
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between mt-10">
        <div className="lg:w-[60%]">
          <div className="  bg-[white] rounded shadow-lg">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              width={"100%"}
              height={350}
            />
          </div>
        </div>
        <div className="lg:w-[37%]">
          <div className=" bg-[white] rounded shadow-lg">
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              width={"100%"}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:justify-between mt-10">
        <div className="lg:w-[37%]">
          <div className=" flex items-center justify-center  bg-[white] rounded shadow-lg h-full">
            <ReactApexChart
              options={donutOptions}
              series={donutSeries}
              type="donut"
              width={"100%"}
              height={350}
            />
          </div>
        </div>
        <div className=" lg:w-[60%]">
          <div className=" bg-[white] rounded shadow-lg">
            <ReactApexChart
              options={options}
              series={series}
              type="bar"
              width={"100%"}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard3;
