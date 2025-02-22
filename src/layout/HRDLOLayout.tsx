import { Outlet } from "react-router-dom";
import Filters from "../components/filters";

export default function HRDLOLayout() {
  return (
    <>
      <Filters />
      <Outlet />
    </>
  );
}
