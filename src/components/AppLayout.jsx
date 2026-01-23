import Slidebar from "./Slidebar";
import styles from "./AppLayout.module.css";
import Map from "./Map";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Slidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
