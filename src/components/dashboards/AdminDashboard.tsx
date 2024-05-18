"use client";
import {
  KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE,
  SUB_ADDRESS_OF_APPROVING_PRODUCT_API,
  SUB_ADDRESS_OF_BANNING_SOMEONE_API,
  SUB_ADDRESS_OF_DELETING_PRODUCTS_BY_ADMIN_API,
  SUB_ADDRESS_OF_GETTING_REPORTS_MADE_BY_USER_API,
  SUB_ADDRESS_OF_GIVING_PERMISSION_TO_SELL_API,
  SUB_ADDRESS_OF_MAKING_REPORT_API,
  SUB_ADDRESS_OF_MAKING_SOMEONE_ADMIN_API,
  SUB_ADDRESS_OF_SEEING_USER_DETAILS_BY_ADMIN_API,
  SUB_ADDRESS_OF_UNBANNING_SOMEONE_API,
  serverURL,
} from "@/data/EnvironmentVariables";
import axios from "axios";
import React from "react";

const AdminDashboard = () => {
  const makeSomeoneAdminHandler = () => {
    const IMPONEXPO_SUPERUSER_KEY = "imponexpo-superuser-key-123";
    const ar7idOfTheUserWhoWillBeAdmin =
      "NZfP011ZEM-QETtaDOiBS-TAulFVMvVA-O9fPXRATXR-TJfrSuyhnU-UCM89bZPUE-BXMyeG2iJL-AR7";
    const dataForServer = {
      IMPONEXPO_SUPERUSER_KEY,
      ar7idOfTheUserWhoWillBeAdmin,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_MAKING_SOMEONE_ADMIN_API}`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const givePermissionToSellHandler = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const ar7idOfTheUserToGivePermissionToSell = "apurboroy7077@gmail.com";
    const dataForServer = {
      authenticationToken,
      ar7idOfTheUserToGivePermissionToSell,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_GIVING_PERMISSION_TO_SELL_API}`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const banSomeoneHandler = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const ar7idOfTheUserWhoWillBeBanned =
      "IKBjGHsUVA-McHloSVNzV-O9qcvE3dhQ-XkKO2i9gNT-PkdzOMNX7Z-KxcvLo7pKU-AYQnhyCbUG-AR7";
    const dataForServer = {
      authenticationToken,
      ar7idOfTheUserWhoWillBeBanned,
    };
    axios
      .post(`${serverURL}${SUB_ADDRESS_OF_BANNING_SOMEONE_API}`, dataForServer)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const unBanSomeoneHandler = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const ar7idOfTheUserWhoWillBeUnBanned = "test";
    const dataForServer = {
      authenticationToken,
      ar7idOfTheUserWhoWillBeUnBanned,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_UNBANNING_SOMEONE_API}`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteProductHandler = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const ar7idOfTheProductWhichWillBeDeleted =
      "EfsHNW3cRT-I9huVIFwDE-QeO4Sq7TtF-Ze9Alb716L-SruuVZkgGR-NgFGBmCvKL-ZGj8zlQOsH-AR7";
    const dataForServer = {
      authenticationToken,
      ar7idOfTheProductWhichWillBeDeleted,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_DELETING_PRODUCTS_BY_ADMIN_API}`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const approveProductHandler = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const ar7idOfTheProductWhichWillBeApproved = "test";
    const dataForServer = {
      authenticationToken,
      ar7idOfTheProductWhichWillBeApproved,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_APPROVING_PRODUCT_API}`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const seeUserDetailsByAdminHandler = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const ar7idOfTheUserOfWhichDetailsWillBeShown =
      "IKBjGHsUVA-McHloSVNzV-O9qcvE3dhQ-XkKO2i9gNT-PkdzOMNX7Z-KxcvLo7pKU-AYQnhyCbUG-AR7";
    const dataForServer = {
      authenticationToken,
      ar7idOfTheUserOfWhichDetailsWillBeShown,
    };
    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_SEEING_USER_DETAILS_BY_ADMIN_API}`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const gettingUsersReportHandler = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const numberOfReportsToGet = 10;
    const dataForServer = {
      authenticationToken,
      numberOfReportsToGet,
    };

    axios
      .post(
        `${serverURL}${SUB_ADDRESS_OF_GETTING_REPORTS_MADE_BY_USER_API}`,
        dataForServer
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const makingReportsHandler = () => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const reportMessage = `Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Distinctio totam architecto odio facilis magnam. Tempore sunt
    voluptatibus at exercitationem nam, dolor est aperiam voluptatum commodi
    mollitia ex unde fugit modi? `;
    const dataForServer = {
      authenticationToken,
      reportMessage,
    };
    axios
      .post(`${serverURL}${SUB_ADDRESS_OF_MAKING_REPORT_API}`, dataForServer)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-10">
      <button
        className=" m-5 border-[2px] bg-[green] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={givePermissionToSellHandler}
      >
        Make a User Seller
      </button>
      <button
        className=" m-5 border-[2px] bg-[green] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={makeSomeoneAdminHandler}
      >
        Make Someone Admin
      </button>
      <button
        className=" m-5 border-[2px] bg-[red] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={banSomeoneHandler}
      >
        Ban Someone
      </button>
      <button
        className=" m-5 border-[2px] bg-[red] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={deleteProductHandler}
      >
        Delete a Product
      </button>
      <button
        className=" m-5 border-[2px] bg-[green] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={unBanSomeoneHandler}
      >
        Unban Someone
      </button>
      <button
        className=" m-5 border-[2px] bg-[green] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={approveProductHandler}
      >
        Approve a Product
      </button>
      <button
        className=" m-5 border-[2px] bg-[green] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={seeUserDetailsByAdminHandler}
      >
        See User Details By Admin
      </button>
      <button
        className=" m-5 border-[2px] bg-[green] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={makingReportsHandler}
      >
        Report Something
      </button>
      <button
        className=" m-5 border-[2px] bg-[green] text-[white] px-3 py-1 rounded-lg outline-none border-none active:scale-[0.95]"
        onClick={gettingUsersReportHandler}
      >
        Get Reports Made By Users
      </button>
    </div>
  );
};

export default AdminDashboard;