import { toast } from "react-toastify";
import { create } from "zustand";
type currentlyOpenedPopupType = "NO_POPUP" | "LOGOUT_POPUP";
type usePopupType = {
  currentlyOpenedPopup: currentlyOpenedPopupType;
  openPopup: (popupName: currentlyOpenedPopupType) => void;
  closePopup: () => void;
};
const usePopup = create<usePopupType>((set) => ({
  currentlyOpenedPopup: "NO_POPUP",
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
      toast("Logout Successful");
      return { ...state, currentlyOpenedPopup: "NO_POPUP" };
    });
  },
}));

export { usePopup };
