import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        The<span>Dev</span>
      </div>

      <nav>
        <Link to="/">AI Chat</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/knowledge-base">Knowledge Base</Link>
        <Link to="/developer-support">Developer Support</Link>
        <Link to="/admin">Admin Panel</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}