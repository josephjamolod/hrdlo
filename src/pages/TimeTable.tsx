import styles from "../styles/TimeTable.module.css";

export default function TimeTable() {
  const timeSlots = [
    "9:30 ~ 10:20(50)",
    "10:30 ~ 11:20(50)",
    "11:30 ~ 12:20(50)",
    "12:30 ~ 13:30(60)",
    "13:30 ~ 14:20(50)",
    "14:30 ~ 15:20(50)",
    "15:30 ~ 16:20(50)",
    "16:30 ~ 17:20(50)",
    "17:30 ~ 18:20(50)",
  ];

  const days = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, index) => (
              <tr key={time}>
                <td className={styles.timeCell}>{time}</td>
                {index === 3 ? (
                  <td colSpan={7} className={styles.lunchTime}>
                    점심시간
                  </td>
                ) : (
                  days.map((_, dayIndex) => (
                    <td key={dayIndex} className={styles.normalCell}></td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.saveButtonContainer}>
        <button className={styles.saveButton}>시간표 저장</button>
      </div>
    </div>
  );
}
