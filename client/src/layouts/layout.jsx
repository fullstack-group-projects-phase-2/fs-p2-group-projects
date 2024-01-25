import { Outlet } from "react-router-dom";
import Header from "../components/header-views/header-view";

export default function Layout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}
