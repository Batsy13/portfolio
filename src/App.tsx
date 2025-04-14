import { Home } from "./components/home";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="h-[100dvh] flex">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
