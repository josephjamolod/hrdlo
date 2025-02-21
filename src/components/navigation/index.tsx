import { navItems } from "../../constant/navigation";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      {navItems.map((item, index) => (
        <div key={index} className={styles.navItemWrapper}>
          <button className={styles.navItem}>
            <img src={item.src} alt={item.label} className={styles.icon} />
            <span className={styles.label}>{item.label}</span>
          </button>
          {index < navItems.length - 1 && (
            <div className={styles.separatorWrapper}>
              <hr className={styles.separator} />
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
