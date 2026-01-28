import Slidebar from "./Slidebar";
import styles from "./AppLayout.module.css";
import Map from "./Map";
import User from "./User";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Slidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
