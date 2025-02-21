import Navigation from "../components/navigation";
import styles from "../styles/Announcements.module.css";

function Announcements() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>
        {/* Your announcements content here */}
      </div>
    </div>
  );
}

export default Announcements;
