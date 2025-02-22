import attendanceSheet from "../../assets/svg/navigation/attentdanceSheet.svg";
import attendanceStatus from "../../assets/svg/navigation/attendanceStat.svg";
import attendanceTimeTable from "../../assets/svg/navigation/timetable.svg";
import attendanceCBT from "../../assets/svg/navigation/CBT.svg";
import attendanceConsulting from "../../assets/svg/navigation/consultation.svg";
import trainee from "../../assets/svg/navigation/trainee.svg";

export const navItems = [
  { src: attendanceStatus, label: "출강신청", href: "/" },
  { src: trainee, label: "훈련생 등록", href: "/trainee-registration" },
  { src: attendanceSheet, label: "출석부", href: "/attendance-sheet" },
  { src: attendanceTimeTable, label: "시간표", href: "/time-table" },
  {
    src: attendanceConsulting,
    label: "상담관리",
    href: "/consultation-management",
  },
  { src: attendanceCBT, label: "CBT (문제은행)", href: "/CBT" },
];
