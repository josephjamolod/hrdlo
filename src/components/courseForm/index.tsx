import styles from "./CourseForm.module.css";

interface CourseFormProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const CourseForm = ({ onCancel, onSubmit }: CourseFormProps) => {
  return (
    <div className={styles.form}>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>개강명</label>
          <div className={styles.dateRange}>
            <input type="text" placeholder="개강명을 입력하세요" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>학습 기간</label>
          <div className={styles.dateRange}>
            <input type="text" placeholder="00/00/00" />
            <span>-</span>
            <input type="text" placeholder="00/00/00" />
          </div>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>교육 구분</label>
          <select className={styles.courseTypeSelect}>
            <option>선택</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>이수 기간</label>
          <div className={styles.dateRange}>
            <input type="text" placeholder="00/00/00" />
            <span>-</span>
            <input type="text" placeholder="00/00/00" />
          </div>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>비용 종류</label>
          <select className={styles.courseTypeSelect}>
            <option>선택</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>실습 기간</label>
          <div className={styles.dateRange}>
            <input type="text" placeholder="00/00/00" />
            <span>-</span>
            <input type="text" placeholder="00/00/00" />
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button onClick={onCancel} className={styles.cancelButton}>
          취소
        </button>
        <button onClick={onSubmit} className={styles.submitButton}>
          수업 등록
        </button>
      </div>
    </div>
  );
};

export default CourseForm;
