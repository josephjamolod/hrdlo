import styles from "./ConsultationModal.module.css";
import { CiTrash } from "react-icons/ci";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <h2>상담등록</h2>
            <button className={styles.trashButton}>
              <CiTrash size={20} />
            </button>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>상담일</label>
              <input type="text" placeholder="00/00/00" />
            </div>

            <div className={styles.formGroup}>
              <label>상담자</label>
              <input type="text" placeholder="상담자를 입력하세요" />
            </div>

            <div className={styles.formGroup}>
              <label>상담 종류</label>
              <select defaultValue="">
                <option value="" disabled>
                  전체
                </option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>상담 내용</label>
            <textarea rows={4}></textarea>
          </div>

          <div className={styles.formGroup}>
            <label>지도관리 및 피드백</label>
            <textarea rows={4}></textarea>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.cancelButton}>
            취소
          </button>
          <button className={styles.submitButton}>상담 등록</button>
        </div>
      </div>
    </div>
  );
}
