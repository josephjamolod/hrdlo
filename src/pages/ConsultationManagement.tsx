import React from "react";
import { useState } from "react";
import SearchInput from "../components/searchInput";
import ConsultationModal from "../components/ConsultationModal";
import styles from "../styles/ConsultationManagement.module.css";
import Pagination from "../components/Pagination";

export default function ConsultationManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
                <th rowSpan={2}>훈련생</th>
                <th rowSpan={2}>상태</th>
                <th>최초 상담일</th>
                <th className={styles.consultDateHeader}>상담일 1</th>
                {[...Array(11)].map((_, index) => (
                  <th key={index} className={styles.consultDateHeader}></th>
                ))}
              </tr>
              <tr>
                <th>구분(상담자)</th>
                <th className={styles.consultDateHeader}>상담자</th>
                {[...Array(11)].map((_, index) => (
                  <th key={index} className={styles.consultDateHeader}></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, index) => (
                <React.Fragment key={index}>
                  <tr key={`${index}-1`}>
                    <td rowSpan={2}>홍길동</td>
                    <td rowSpan={2}>정상</td>
                    <td rowSpan={2}>
                      <button
                        className={styles.consultButton}
                        onClick={handleOpenModal}
                      >
                        상담일정
                      </button>
                    </td>
                    {[...Array(12)].map((_, idx) => (
                      <td
                        key={`${index}-1-${idx}`}
                        className={styles.consultorCell}
                      ></td>
                    ))}
                  </tr>
                  <tr key={`${index}-2`}>
                    {[...Array(12)].map((_, idx) => (
                      <td
                        key={`${index}-2-${idx}`}
                        className={styles.consultorCell}
                      ></td>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <ConsultationModal isOpen={isModalOpen} onClose={handleCloseModal} />
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
