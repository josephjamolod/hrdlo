import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Navigation from "../components/navigation";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
}
