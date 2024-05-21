import SettingsAdminDashboard3 from "@/components/dashboard-3/SettingsAdminDashboard3";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Settings",
  description: "Settings Of Users",
};
const page = () => {
  return (
    <>
      <SettingsAdminDashboard3 />
    </>
  );
};

export default page;
