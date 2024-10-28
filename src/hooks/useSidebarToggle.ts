import { create } from "zustand";

interface SidebarToggle {
  isSidebarVisible: boolean;
  invokeToggleSidebar: () => void;
}

export const useSideBarToggle = create<SidebarToggle>((set, get) => ({
  isSidebarVisible: false,
  invokeToggleSidebar: () => set({ isSidebarVisible: !get().isSidebarVisible }),
}));
