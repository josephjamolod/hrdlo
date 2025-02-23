import SearchInput from "../components/searchInput";
import Pagination from "../components/Pagination";
import { useState } from "react";
import styles from "../styles/HRDLOGuide.module.css";

function HRDLOGuide() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7; // This could be calculated based on your data

  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchWrapper}>
          <SearchInput placeholder="훈련생을 검색하세요." />
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th colSpan={5}>교육훈련생</th>
                <th colSpan={9} className={styles.classTime}>
                  수업시간
                </th>
                <th colSpan={3}>이수시간</th>
                <th colSpan={8}>이수시간</th>
              </tr>
              <tr>
                <th rowSpan={2} className={styles.checkbox}>
                  <input type="checkbox" />
                </th>
                <th>NO</th>
                <th>성명</th>
                <th>생년월일</th>
                <th>교육과정</th>
                <th className={styles.classTimeCell}>입실</th>
                <th className={styles.classTimeCell}>1교시</th>
                <th className={styles.classTimeCell}>2교시</th>
                <th className={styles.classTimeCell}>3교시</th>
                <th className={styles.classTimeCell}>4교시</th>
                <th className={styles.classTimeCell}>5교시</th>
                <th className={styles.classTimeCell}>6교시</th>
                <th className={styles.classTimeCell}>7교시</th>
                <th className={styles.classTimeCell}>8교시</th>
                <th>퇴실</th>
                <th>외출</th>
                <th>외출시간</th>
                <th>복귀</th>
                <th>조퇴</th>
                <th>이름</th>
                <th>상기</th>
                <th>실습</th>
                <th>휴가</th>
              </tr>
            </thead>

            <tbody>
              {[...Array(10)].map((_, index) => (
                <tr key={index}>
                  <td className={styles.checkbox}>
                    <input type="checkbox" />
                  </td>
                  <td>{index + 1}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default HRDLOGuide;
