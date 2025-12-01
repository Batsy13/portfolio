import { Outlet } from "react-router";
import { Sidebar } from "./components/sidebar";
import { Toaster } from "@/components/ui/sonner"

function Layout() {
  return (
    <div className="h-svh flex montserrat">
      <Sidebar />
      <main className="w-full overflow-y-scroll">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}

export default Layout;
