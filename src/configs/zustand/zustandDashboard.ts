import { create } from "zustand";

type refType =
  | null
  | React.MutableRefObject<null>
  | React.MutableRefObject<HTMLElement>;
type useDashboardType = {
  adminDashboardMenubarRef: refType;
  setAdminDashboardMenubarRef: (menubarRef: refType) => void;
};

const useDashboard = create<useDashboardType>((set) => ({
  adminDashboardMenubarRef: null,
  setAdminDashboardMenubarRef: (menubarRef: refType) => {
    set((state) => {
      return {
        ...state,
        adminDashboardMenubarRef: menubarRef,
      };
    });
  },
}));

export { useDashboard };
