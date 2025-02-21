import { useState } from "react";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import styles from "../styles/FAQ.module.css";
import Navigation from "../components/navigation";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { id: 1, question: "FAQ 제목입니다." },
    { id: 2, question: "FAQ 제목입니다." },
    { id: 3, question: "FAQ 제목입니다." },
    { id: 4, question: "FAQ 제목입니다." },
    { id: 5, question: "FAQ 제목입니다." },
    { id: 6, question: "FAQ 제목입니다." },
    { id: 7, question: "FAQ 제목입니다." },
    { id: 8, question: "FAQ 제목입니다." },
    { id: 9, question: "FAQ 제목입니다." },
    { id: 10, question: "FAQ 제목입니다." },
    { id: 11, question: "FAQ 제목입니다." },
    { id: 12, question: "FAQ 제목입니다." },
    { id: 13, question: "FAQ 제목입니다." },
  ];

  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.title}>FAQ</h1>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={faq.id} className={styles.faqItem}>
            <button
              className={styles.questionButton}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={styles.questionMark}>Q.</span>
              <span className={styles.question}>{faq.question}</span>
              <span className={styles.arrow}>
                {openIndex === index ? (
                  <IoMdArrowDropup />
                ) : (
                  <IoMdArrowDropdown />
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className={styles.answer}>FAQ 내용입니다.</div>
            )}
          </div>
        ))}
      </div>
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
    </div>
  );
}

export default FAQ;
