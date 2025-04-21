import { Outlet } from "react-router";
import { Sidebar } from "./components/sidebar";

function Layout() {
  return (
    <div className="h-[100dvh] flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
