import React, { useMemo } from "react";
import { useSnapshot } from "valtio";
import {
  sidebarSnapshot,
  toogleSidebar,
  closeSidebar,
} from "../../snapshots/sidebar.snapshot";
import HamburgerIcon from "../icons/HamburgerIcon";
import ChevronDoubleIcon from "../icons/ChevronDoubleIcon";
import { locationSnapshot } from "../../snapshots/location.snapshot";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  width?: number;
};

const mapPathnameToMenus: Record<string, { label: string; href: string }[]> = {
  "/foundation": [
    { label: "Overview", href: "/foundation" },
    { label: "Color", href: "/foundation/color" },
    { label: "Spacing", href: "/foundation/spacing" },
    { label: "Radius", href: "/foundation/radius" },
  ],
  "/component": [
    { label: "Accordion", href: "/component/accordion" },
    { label: "Button", href: "/component/button" },
    { label: "Carousel", href: "/component/carousel" },
    { label: "Calendar", href: "/component/calendar" },
    { label: "Popover", href: "/component/popover" },
    { label: "Select", href: "/component/select" },
    { label: "Tabs", href: "/component/tabs" },
    { label: "Toast", href: "/component/toast" },
  ],
};

const visibleSidebarPathnames = ["/foundation", "/components"];
const getSidebarMenusFromPathname = (pathname: string) => {
  const targetPathname = visibleSidebarPathnames.find((path) =>
    pathname.startsWith(path)
  );
  if (!targetPathname) {
    return null;
  }
  return mapPathnameToMenus[targetPathname];
};
const Sidebar: React.FC<SidebarProps> = ({ width = 200 }) => {
  const navigate = useNavigate();
  const { sidebarOpen } = useSnapshot(sidebarSnapshot);
  const { currentPathname } = useSnapshot(locationSnapshot);

  const menus = getSidebarMenusFromPathname(currentPathname);
  console.log({ menus });
  const isVisible = useMemo(
    () =>
      visibleSidebarPathnames.find((path) => currentPathname.startsWith(path)),
    [currentPathname]
  );

  if (!isVisible) {
    console.log("close");
    closeSidebar();
    return null;
  }

  const handleClickSidebarMenu = (href: string) => {
    navigate(href);
  };

  return (
    <div className="sidebar-root">
      <button
        onClick={toogleSidebar}
        className={`sidebar-toggle-btn${sidebarOpen ? " open" : ""}`}
        style={{ left: sidebarOpen ? width + 10 : 10 }}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {sidebarOpen ? (
          <ChevronDoubleIcon stroke="white" width={20} />
        ) : (
          <HamburgerIcon stroke="white" width={20} />
        )}
      </button>
      <aside
        className={`sidebar${sidebarOpen ? " open" : ""}`}
        style={{ width: sidebarOpen ? width : 0 }}
      >
        <nav className={`sidebar-nav${sidebarOpen ? " open" : ""}`}>
          {menus?.map((menu, idx) => (
            <div
              key={idx}
              onClick={() => handleClickSidebarMenu(menu.href)}
              className="sidebar-menu-item"
            >
              {menu.label}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
