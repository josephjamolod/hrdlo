import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Navigation from "../components/navigation";
import styles from "../styles/RootLayout.module.css";

export default function RootLayout() {
  const { pathname } = useLocation();
  // Check if the path matches "/faq/{id}" or "/announcements/{id}"
  const isDetailsPage = /^\/(faq|announcements)\/[^/]+$/.test(pathname);

  // console.log("Is Details Page:", isDetailsPage);

  return (
    <div className={styles.container}>
      <Header />
      {/* Show navigation only if it's NOT a details page */}
      {!isDetailsPage && <Navigation />}
      <Outlet />
    </div>
  );
}
