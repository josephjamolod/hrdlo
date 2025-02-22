import React, { useState } from "react";
import Button from "../components/Button";
import SearchInput from "../components/searchInput";
import styles from "../styles/AttendanceSheet.module.css";
import Pagination from "../components/Pagination";

export default function AttendanceSheet() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;
  return (
    <>
      <div className={styles.searchWrapper}>
        <div className={styles.searchInputWrapper}>
          <SearchInput placeholder="훈련생을 검색하세요." />
        </div>

        <Button>훈련생 삭제</Button>
      </div>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <colgroup>
              <col className={styles.checkboxCol} />
              <col className={styles.noCol} />
              <col className={styles.nameCol} />
              <col className={styles.huisuCol} />
              <col className={styles.bigoCol} />
              <col className={styles.courseCol} span={2} />
              <col className={styles.dateCol} span={3} />
              <col className={styles.smallCol} span={30} />
              <col className={styles.timeCol} />
              <col className={styles.fieldCol} />
              <col className={styles.studentCol} />
              <col className={styles.attendanceCol} />
            </colgroup>

            <thead>
              <tr>
                <th className={styles.redTh} rowSpan={2}>
                  <input type="checkbox" />
                </th>
                <th className={styles.redTh} rowSpan={2}>
                  NO
                </th>
                <th className={styles.redTh} rowSpan={2}>
                  훈련생
                </th>
                <th rowSpan={2}>후이수시간</th>
                <th>비고</th>
                <th colSpan={2} className={styles.redTh}>
                  교육 과정 ⓐ
                </th>
                <th colSpan={33} className={styles.theoryHeader}>
                  이론 및 실기 교육
                </th>
                <th rowSpan={2} className={styles.redTh}>
                  현장실습
                </th>
                <th rowSpan={2} className={styles.redTh}>
                  교육생 구분
                </th>
                <th rowSpan={2} className={styles.redTh}>
                  출결 구분
                </th>
              </tr>
              <tr>
                <th>ⓑ - ⓐ</th>
                <th className={styles.redTh}>구분</th>
                <th className={styles.redTh}>시간</th>
                <th>12/30</th>
                <th>12/31</th>
                <th>1/1</th>
                {[...Array(27)].map((_, i) => (
                  <th key={i}></th>
                ))}
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {[...Array(3)].map((_, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <tr key={`${rowIndex}-1`}>
                    <td rowSpan={4} className={styles.grayCell}>
                      <input type="checkbox" />
                    </td>
                    <td rowSpan={4} className={styles.grayCell}>
                      1
                    </td>
                    <td rowSpan={4} className={styles.grayCell}>
                      홍길동
                    </td>
                    <td className={styles.whiteCell}>56</td>
                    <td className={styles.whiteCell}>-70</td>
                    <td className={styles.grayCell}>이론</td>
                    <td className={styles.grayCell}>126</td>
                    <td className={styles.whiteCell}></td>
                    <td className={styles.whiteCell}></td>
                    <td className={styles.whiteCell}></td>
                    {[...Array(30)].map((_, i) => (
                      <td key={i} className={styles.whiteCell}></td>
                    ))}
                    <td className={styles.grayCell}>-</td>
                    <td rowSpan={4} className={styles.grayCell}>
                      신규자
                    </td>
                    <td rowSpan={4} className={styles.grayCell}>
                      시스템
                    </td>
                  </tr>
                  <tr key={`${rowIndex}-2`}>
                    <td className={styles.whiteCell}>24</td>
                    <td className={styles.whiteCell}>-90</td>
                    <td className={styles.grayCell}>실기</td>
                    <td className={styles.grayCell}>114</td>
                    <td className={styles.whiteCell}></td>
                    <td className={styles.whiteCell}></td>
                    <td className={styles.whiteCell}></td>
                    {[...Array(30)].map((_, i) => (
                      <td key={i} className={styles.whiteCell}></td>
                    ))}
                    <td className={styles.grayCell}>-</td>
                  </tr>
                  <tr key={`${rowIndex}-3`}>
                    <td className={styles.whiteCell}>-</td>
                    <td className={styles.whiteCell}>-</td>
                    <td className={styles.grayCell}>실습</td>
                    <td className={styles.grayCell}>-</td>
                    <td className={styles.whiteCell}></td>
                    <td className={styles.whiteCell}></td>
                    <td className={styles.whiteCell}></td>
                    {[...Array(30)].map((_, i) => (
                      <td key={i} className={styles.whiteCell}></td>
                    ))}
                    <td className={styles.grayCell}>-</td>
                  </tr>
                  <tr key={`${rowIndex}-4`} className={styles.totalRow}>
                    <td className={styles.whiteCell}>80</td>
                    <td className={styles.whiteCell}>-160</td>
                    <td className={styles.grayCell}>계</td>
                    <td className={styles.grayCell}>240</td>
                    <td className={styles.whiteCell}></td>
                    <td className={styles.whiteCell}></td>
                    <td className={styles.whiteCell}></td>
                    {[...Array(30)].map((_, i) => (
                      <td key={i} className={styles.whiteCell}></td>
                    ))}
                    <td className={styles.grayCell}>-</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          className={styles.pagination}
        />
      </div>
    </>
  );
}
