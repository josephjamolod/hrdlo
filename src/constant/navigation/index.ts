import attendanceSheet from "../../assets/svg/navigation/attentdanceSheet.svg";
import attendanceStatus from "../../assets/svg/navigation/attendanceStat.svg";
import attendanceTimeTable from "../../assets/svg/navigation/timetable.svg";
import attendanceCBT from "../../assets/svg/navigation/CBT.svg";
import attendanceConsulting from "../../assets/svg/navigation/consultation.svg";
import trainee from "../../assets/svg/navigation/trainee.svg";

export const navItems = [
  { src: attendanceStatus, label: "출강신청" },
  { src: trainee, label: "훈련생 등록" },
  { src: attendanceSheet, label: "출석부" },
  { src: attendanceTimeTable, label: "시간표" },
  { src: attendanceConsulting, label: "상담관리" },
  { src: attendanceCBT, label: "CBT (문제은행)" },
];
