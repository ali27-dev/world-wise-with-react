import Logo from "./Logo";

import SidebarFooter from "./SlidebarFooter";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Slidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      {/* <p>List of cities</p> */}

      <SidebarFooter />
    </div>
  );
}
export default Slidebar;
