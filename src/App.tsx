import { Outlet } from "react-router";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="h-[100dvh] flex">
      <Sidebar />
      <Outlet  />
    </div>
  );
}

export default App;
