import { useParams, useNavigate, Link } from "react-router-dom";
import { announcements } from "../constant/announcementData";
import styles from "../styles/AnnouncementDetail.module.css";

function AnnouncementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const announcement = announcements.find(
    (a) => a.id === parseInt(id as string)
  );

  if (!announcement) {
    return <div>Announcement not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>공지사항</span>
          <h1>공지사항 제목입니다!!!!!!!!!!!!!!!!!!!</h1>
          <span>2024-11-11</span>
        </div>

        <div className={styles.body}>
          <p>FAQ 내용입니다.</p>
        </div>
        <Link className={styles.link} to="/announcements">
          <button
            className={styles.listButton}
            onClick={() => navigate("/announcements")}
          >
            목록으로 가기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AnnouncementDetail;
