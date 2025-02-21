import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { IoCloseOutline } from "react-icons/io5";
import HrdloIcon from "../../assets/svg/hrdlo.svg";
import faqIcon from "../../assets/svg/faq.svg";
import announcementIcon from "../../assets/svg/announcement.svg";
import courseManagementIcon from "../../assets/svg/management.svg";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Menu Button */}
      <button className={styles.menuBtn} onClick={toggleMenu}>
        <span>☰</span>
      </button>

      {/* Center Logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="HRDLO Logo" className={styles.logo} />
      </div>

      {/* Right Buttons */}
      <div className={styles.rightButtons}>
        <button>출강기관별(이용)</button>
        <hr />
        <button>내 로그아웃</button>
      </div>

      {/* Side Navigation */}
      <div className={`${styles.sidenav} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.sidenavHeader}>
          <button className={styles.closeBtn} onClick={toggleMenu}>
            <span>
              <IoCloseOutline height={4} width={4} />
            </span>
          </button>
        </div>
        <nav className={styles.navList}>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
            end
          >
            <div className={styles.navItem}>
              <img src={HrdloIcon} alt="HRDLO" className={styles.icon} />
              HRDLO 안내
            </div>
          </NavLink>
          <NavLink
            to="/announcements"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
          >
            <div className={styles.navItem}>
              <img
                src={announcementIcon}
                alt="공지사항"
                className={styles.icon}
              />
              공지사항
            </div>
          </NavLink>
          <NavLink
            to="/faq"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
          >
            <div className={styles.navItem}>
              <img src={faqIcon} alt="FAQ" className={styles.icon} />
              FAQ
            </div>
          </NavLink>
          <NavLink
            to="/course-management"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.activeLink : ""}`
            }
          >
            <div className={styles.navItem}>
              <img
                src={courseManagementIcon}
                alt="개강관리"
                className={styles.icon}
              />
              개강관리
            </div>
          </NavLink>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;
