"use client";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import "jsvectormap/dist/css/jsvectormap.css";

// Dynamically import jsVectorMap to prevent SSR issues
const jsVectorMap: any = dynamic(() => import("jsvectormap"), { ssr: false });

const MapOne: React.FC = () => {
  useEffect(() => {
    // Only run this code on the client side
    if (typeof window !== "undefined") {
      const mapOne = new jsVectorMap({
        selector: "#mapOne",
        map: "us_aea_en",
        zoomButtons: true,
        regionStyle: {
          initial: {
            fill: "#C8D0D8",
          },
          hover: {
            fillOpacity: 1,
            fill: "#3056D3",
          },
        },
        regionLabelStyle: {
          initial: {
            fontFamily: "Satoshi",
            fontWeight: "semibold",
            fill: "#fff",
          },
          hover: {
            cursor: "pointer",
          },
        },
        labels: {
          regions: {
            render(code: string) {
              return code.split("-")[1];
            },
          },
        },
      });

      return () => {
        // mapOne.destroy();
      };
    }
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <div className="h-90">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>
  );
};

export default MapOne;
