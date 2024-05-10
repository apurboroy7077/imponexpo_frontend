"use client";
import {
  AUTHENTICATE_USER_WITH_TOKEN_SUB_URL,
  KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE,
  serverURL,
} from "@/data/EnvironmentVariables";
import axios from "axios";
import React, { useEffect } from "react";

const AuthenticateUser = () => {
  const authenticationToken = localStorage.getItem(
    KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE
  );
  const authenticateUserFunction = () => {
    axios
      .post(`${serverURL}${AUTHENTICATE_USER_WITH_TOKEN_SUB_URL}`, {
        authenticationToken,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (authenticationToken) {
      authenticateUserFunction();
    }
  }, []);

  return <>test</>;
};

export default AuthenticateUser;
