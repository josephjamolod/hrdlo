import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../constant/navigation";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.navigation}>
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.href;
        return (
          <Link to={item.href} key={index} className={styles.navItemWrapper}>
            <button
              className={`${styles.navItem} ${isActive ? styles.active : ""}`}
            >
              <img
                src={item.src}
                alt={item.label}
                className={`${styles.icon} ${
                  isActive ? styles.activeIcon : ""
                }`}
              />
              <span
                className={`${styles.label} ${
                  isActive ? styles.activeLabel : ""
                }`}
              >
                {item.label}
              </span>
            </button>
            {index < navItems.length - 1 && (
              <div className={styles.separatorWrapper}>
                <hr className={styles.separator} />
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
