import { Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./layout/Sidebar";
import ChatWindow from "./chat/ChatWindow";

import Dashboard from "./pages/Dashboard";
import KnowledgeBase from "./pages/KnowledgeBase";
import DeveloperSupport from "./pages/DeveloperSupport";
import AdminPanel from "./pages/AdminPanel";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<ChatWindow />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/developer-support" element={<DeveloperSupport />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;