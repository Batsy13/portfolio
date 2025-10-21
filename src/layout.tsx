import { Outlet } from "react-router";
import { Sidebar } from "./components/sidebar";

function Layout() {
  return (
    <div className="h-svh flex montserrat">
      <Sidebar />
      <main className="w-full overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
