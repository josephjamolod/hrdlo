import { useParams } from "react-router-dom";
import ReusableDetail from "../components/reusableDetail";

function FAQDetail() {
  const { id } = useParams();
  const faq = {
    id: parseInt(id as string),
    title: "FAQ 제목입니다.",
    date: "2024-11-11",
  };

  return (
    <ReusableDetail
      category="FAQ"
      title={faq.title}
      date={faq.date}
      content="FAQ 내용입니다."
      backUrl="/faq"
    />
  );
}

export default FAQDetail;
