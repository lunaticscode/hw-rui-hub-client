import { proxy } from "valtio";

export const sidebarSnapshot = proxy({
  sidebarOpen: false,
});
export const closeSidebar = () => {
  sidebarSnapshot.sidebarOpen = false;
};
export const toogleSidebar = () => {
  sidebarSnapshot.sidebarOpen = !sidebarSnapshot.sidebarOpen;
};
