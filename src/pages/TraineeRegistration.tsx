import styles from "../styles/TraineeRegistration.module.css";
import SearchInput from "../components/searchInput";
import trainee from "../assets/svg/trainee-registration/trainee.svg";
import talk from "../assets/svg/trainee-registration/talk.svg";
import sms from "../assets/svg/trainee-registration/SMS.svg";
import sendMail from "../assets/svg/trainee-registration/send_mail.svg";
import Button from "../components/Button";

export default function TraineeRegistration() {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonGroup}>
            <div className={styles.searchWrapper}>
              <SearchInput placeholder="훈련생을 검색하세요." />
            </div>
            <button className={styles.redButton}>
              <img src={trainee} width={20} height={20} alt="훈련생 등록" />
              훈련생 등록
            </button>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.orangeButton}>
              문자 발송
              <img src={sms} width={20} height={20} alt="문자 발송" />
            </button>
            <button className={styles.lightOrangeButton}>
              톡 발송
              <img src={talk} width={20} height={20} alt="이메일 발송" />
            </button>
            <button className={styles.lightestOrangeButton}>
              이메일 발송
              <img src={sendMail} width={20} height={20} alt="아이디 발급" />
            </button>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <Button className={styles.gray}>훈련생 삭제</Button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>NO</th>
              <th>이름</th>
              <th>아이디</th>
              <th>생년월일</th>
              <th>전화번호</th>
              <th>교육과정</th>
              <th>수정</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(12)].map((_, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>1</td>
                <td>홍길동</td>
                <td>아이디</td>
                <td>생년월일</td>
                <td>010-0000-0000</td>
                <td>구분</td>
                <td>
                  <button className={styles.editButton}>수정</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button>←</button>
        <button>1</button>
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
