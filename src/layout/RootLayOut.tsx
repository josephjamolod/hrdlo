import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Navigation from "../components/navigation";
import styles from "../styles/RootLayout.module.css";

export default function RootLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <Outlet />
    </div>
  );
}
