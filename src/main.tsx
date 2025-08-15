import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/home.tsx";
import { Projects } from "../pages/projects.tsx"
import { Stack } from "../pages/stack.tsx"
import { About } from "../pages/about.tsx"
import { Contact } from "../pages/contact.tsx"
import { AchievementsPage } from "../pages/achievements.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="stack" element={<Stack />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="achievements" element={<AchievementsPage />} ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
