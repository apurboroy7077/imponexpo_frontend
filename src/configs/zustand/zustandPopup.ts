import { toast } from "react-toastify";
import { create } from "zustand";
type currentlyOpenedPopupType =
  | "NO_POPUP"
  | "LOGOUT_POPUP"
  | "PRODUCT_COMMENTS_POPUP";
type usePopupType = {
  currentlyOpenedPopup: currentlyOpenedPopupType;
  ar7idOfTheCommentPopupSubject: string;
  openPopup: (popupName: currentlyOpenedPopupType) => void;
  closePopup: () => void;
  setAr7idOfTheCommentPopupSubject: (
    ar7idOfTheCommentPopupSubject: string
  ) => void;
};
const usePopup = create<usePopupType>((set) => ({
  currentlyOpenedPopup: "NO_POPUP",
  ar7idOfTheCommentPopupSubject: "",
  openPopup: (popupName: currentlyOpenedPopupType) => {
    set((state) => {
      return {
        ...state,
        currentlyOpenedPopup: popupName,
      };
    });
  },
  closePopup: () => {
    set((state) => {
      return { ...state, currentlyOpenedPopup: "NO_POPUP" };
    });
  },
  setAr7idOfTheCommentPopupSubject: (ar7idOfTheCommentPopupSubject: string) => {
    set((state) => {
      return {
        ...state,
        ar7idOfTheCommentPopupSubject: ar7idOfTheCommentPopupSubject,
      };
    });
  },
}));

export { usePopup };
