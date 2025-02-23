import { announcements } from "../constant/announcementData";

import styles from "../styles/Announcements.module.css";
import { Link } from "react-router-dom";
import SearchInput from "../components/searchInput";
import { useState } from "react";
import Pagination from "../components/Pagination";

function Announcements() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;
  return (
    <>
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
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className={styles.pagination}
      />
    </>
  );
}

export default Announcements;
