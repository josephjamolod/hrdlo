import { courses } from "../constant/courseManagement";
import styles from "../styles/CourseManagement.module.css";
import { useState } from "react";
import Modal from "../components/modal";
import CourseForm from "../components/courseForm";

import SearchInput from "../components/searchInput";

function CourseManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>개강관리</h1>
      <div className={styles.controls}>
        <div className={styles.filters}>
          <div className={styles.selectGroup}>
            <select className={styles.select}>
              <option>선택</option>
            </select>
            <select className={styles.select}>
              <option>개강일</option>
            </select>
          </div>
          <SearchInput placeholder="개강생성 검색에 추가" />
          <button
            className={styles.createButton}
            onClick={() => setIsModalOpen(true)}
          >
            개강 생성
          </button>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>NO</th>
            <th>개강명</th>
            <th>훈련일자</th>
            <th>수정 / 삭제</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.period}</td>
              <td>
                <div className={styles.actions}>
                  <button className={styles.editButton}>수정</button>
                  <button className={styles.deleteButton}>삭제</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="개강 생성"
      >
        <CourseForm
          onCancel={() => setIsModalOpen(false)}
          onSubmit={() => {
            // Handle form submission
            setIsModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}

export default CourseManagement;
