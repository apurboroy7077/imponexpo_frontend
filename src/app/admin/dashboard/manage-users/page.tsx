import ManageUsers from "@/components/dashboard-3/ManageUsers";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Manage Users",
  description: "Admins Can Manage Users here.",
};
const page = () => {
  return (
    <>
      <ManageUsers />
    </>
  );
};

export default page;
