import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import User from "../components/User";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
