import { useParams } from "react-router-dom";
import { announcements } from "../constant/announcementData";
import ReusableDetail from "../components/reusableDetail";

function AnnouncementDetail() {
  const { id } = useParams();
  const announcement = announcements.find(
    (a) => a.id === parseInt(id as string)
  );

  if (!announcement) {
    return <div>Announcement not found</div>;
  }

  return (
    <ReusableDetail
      category="공지사항"
      title={announcement.title}
      date={announcement.date}
      content="FAQ 내용입니다."
      backUrl="/announcements"
    />
  );
}

export default AnnouncementDetail;
