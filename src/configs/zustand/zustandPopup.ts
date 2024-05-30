import { toast } from "react-toastify";
import { create } from "zustand";
type refType =
  | null
  | React.MutableRefObject<null>
  | React.MutableRefObject<HTMLElement>;

type currentlyOpenedPopupType =
  | "NO_POPUP"
  | "LOGOUT_POPUP"
  | "PRODUCT_COMMENTS_POPUP"
  | "SEARCH_RESULT_POPUP";
type usePopupType = {
  currentlyOpenedPopup: currentlyOpenedPopupType;
  ar7idOfTheCommentPopupSubject: string;
  typenWordsInSearchBox: string;
  openPopup: (popupName: currentlyOpenedPopupType) => void;
  closePopup: () => void;
  setAr7idOfTheCommentPopupSubject: (
    ar7idOfTheCommentPopupSubject: string
  ) => void;
  setTypenWordsInSearchBox: (typenWords: string) => void;
  searchInpurRef: refType;
  setSearchInputRef: (ref: refType) => void;
  searchResultRef: refType;
  setSearchResultRef: (ref: refType) => void;
};
const usePopup = create<usePopupType>((set) => ({
  currentlyOpenedPopup: "NO_POPUP",
  ar7idOfTheCommentPopupSubject: "",
  typenWordsInSearchBox: "",
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
  setTypenWordsInSearchBox: (typenWords) => {
    set((state) => {
      return { ...state, typenWordsInSearchBox: typenWords };
    });
  },
  searchInpurRef: null,
  setSearchInputRef: (ref) => {
    set((state) => {
      return {
        ...state,
        searchInpurRef: ref,
      };
    });
  },
  searchResultRef: null,
  setSearchResultRef: (ref) => {
    set((state) => {
      return {
        ...state,
        searchResultRef: ref,
      };
    });
  },
}));

export { usePopup };
