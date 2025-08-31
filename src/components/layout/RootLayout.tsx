import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSnapshot } from "valtio";
import { sidebarSnapshot } from "../../snapshots/sidebar.snapshot";
import useUpdateLocation from "../../hooks/useUpdateLocation";

const RootLayout = () => {
  const { sidebarOpen } = useSnapshot(sidebarSnapshot);
  useUpdateLocation();
  return (
    <>
      <Header />
      <Sidebar />
      <main
        className={`app-main-content${
          sidebarOpen ? " with-sidebar" : ""
        }`.trim()}
      >
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
