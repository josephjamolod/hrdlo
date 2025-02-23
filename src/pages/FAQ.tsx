import { IoMdArrowDropdown } from "react-icons/io";

import styles from "../styles/FAQ.module.css";
import { Link } from "react-router-dom";
import { faqs } from "../constant/faqs";
import Pagination from "../components/Pagination";
import { useState } from "react";

function FAQ() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>FAQ</h1>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <div key={faq.id} className={styles.faqItem}>
              <button className={styles.questionButton}>
                <span className={styles.questionMark}>Q.</span>
                <span className={styles.question}>{faq.question}</span>
                <Link to={`/faq/${faq.id}`}>
                  <span className={styles.arrow}>
                    <IoMdArrowDropdown />
                  </span>
                </Link>
              </button>
            </div>
          ))}
        </div>
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

export default FAQ;
