"use client";
import {
  AUTHENTICATE_USER_WITH_TOKEN_SUB_URL,
  KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE,
  serverURL,
} from "@/data/EnvironmentVariables";
import axios from "axios";
import React, { useEffect } from "react";
import { useUser } from "../zustand/zustandUser";
import { userDataForClientSideType } from "../types/types";
import { toast } from "react-toastify";

const AuthenticateUser = () => {
  const markUserAsLoggedIn = useUser((state) => state.markUserAsLoggedIn);
  useEffect(() => {
    const authenticationToken = localStorage.getItem(
      KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
    );
    const authenticateUserFunction = () => {
      axios
        .post(`${serverURL}${AUTHENTICATE_USER_WITH_TOKEN_SUB_URL}`, {
          authenticationToken,
        })
        .then((response) => {
          const userData = response.data.userData as userDataForClientSideType;
          const userFullName = userData.userFullName;
          markUserAsLoggedIn(userData);
          toast(`Welcome ${userFullName}!`);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (authenticationToken) {
      authenticateUserFunction();
    }
  }, []);

  return <></>;
};

export default AuthenticateUser;
