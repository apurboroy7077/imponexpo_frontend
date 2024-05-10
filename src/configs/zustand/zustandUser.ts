import { create } from "zustand";
import { userDataForClientSideType } from "../types/types";
import { KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE } from "@/data/EnvironmentVariables";
type useUserType = {
  loginStatus: "NOT_LOGGED_IN" | "LOGGED_IN";
  userData: null | userDataForClientSideType;
  markUserAsLoggedIn: (userData: userDataForClientSideType) => void;
  markUserAsNotLoggedIn: () => void;
};
const useUser = create<useUserType>((set) => ({
  loginStatus: "NOT_LOGGED_IN",
  userData: null,
  markUserAsLoggedIn: (userData: userDataForClientSideType) => {
    set((state) => {
      return {
        ...state,
        loginStatus: "LOGGED_IN",
        userData: userData,
      };
    });
  },
  markUserAsNotLoggedIn: () => {
    set((state) => {
      localStorage.removeItem(KEYNAME_OF_AUTHENTICATION_TOKEN_IN_LOCALSTORAGE);
      return {
        ...state,
        loginStatus: "NOT_LOGGED_IN",
        userData: null,
      };
    });
  },
}));

export { useUser };
