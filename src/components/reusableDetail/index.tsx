import { Link } from "react-router-dom";
import styles from "./ReusableDetail.module.css";

interface DetailProps {
  category: string;
  title: string;
  date: string;
  content: string;
  backUrl: string;
}

const ReusableDetail = ({
  category,
  title,
  date,
  content,
  backUrl,
}: DetailProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>{category}</span>
          <h1>{title}</h1>
          <span>{date}</span>
        </div>

        <div className={styles.body}>
          <p>{content}</p>
        </div>
        <Link className={styles.link} to={backUrl}>
          <button className={styles.listButton}>목록으로 가기</button>
        </Link>
      </div>
    </div>
  );
};

export default ReusableDetail;
