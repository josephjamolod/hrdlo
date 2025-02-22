import { announcements } from "../constant/announcementData";

import styles from "../styles/Announcements.module.css";
import { Link } from "react-router-dom";
import SearchInput from "../components/searchInput";

function Announcements() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>공지사항</h1>
        <div className={styles.searchWrapper}>
          <SearchInput placeholder="검색어를 입력하세요." />
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>NO</th>
                <th>제목</th>
                <th>날짜</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement, index) => (
                <tr key={index}>
                  <td>{announcement.id}</td>
                  <td className={styles.titleCell}>{announcement.title}</td>
                  <td>{announcement.date}</td>
                  <td>
                    <Link to={`/announcements/${announcement.id}`}>
                      <button className={styles.arrowButton}>→</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.pagination}>
          <button>←</button>
          <button className={styles.active}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>→</button>
        </div>
      </div>
    </div>
  );
}

export default Announcements;
