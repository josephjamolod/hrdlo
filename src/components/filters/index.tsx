import SearchInput from "../searchInput";
import styles from "./Filters.module.css";
import excel from "../../assets/svg/excel.svg";

const Filters = () => {
  return (
    <div className={styles.container}>
      <div className={styles.filterWrapper}>
        <div className={styles.filterGroup}>
          <select className={styles.select}>
            <option value="">연차</option>
          </select>
          <select className={styles.select}>
            <option value="">개강일</option>
          </select>

          <SearchInput placeholder="키워드를 입력해 주세요" />
        </div>
        <div className={styles.filterGroup}>
          <select className={styles.mainSelect}>
            <option>출석부 - 기본일일</option>
          </select>
          <button className={styles.downloadButton}>
            <img src={excel} width={20} height={20} alt="download" />
            <span>엑셀 다운로드</span>
          </button>
        </div>
      </div>

      <div className={styles.dateRange}>
        <span className={styles.title}>개강명입니다</span>
        <span>2024.05.01 - 2024.05.01</span>
      </div>
    </div>
  );
};

export default Filters;
