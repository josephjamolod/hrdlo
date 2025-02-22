import { IoMdArrowDropdown } from "react-icons/io";

import styles from "../styles/FAQ.module.css";
import { Link } from "react-router-dom";
import { faqs } from "../constant/faqs";

function FAQ() {
  return (
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
