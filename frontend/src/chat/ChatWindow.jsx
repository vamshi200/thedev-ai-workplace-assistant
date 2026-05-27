import { useEffect, useRef, useState } from "react";
import technicalData from "../data/technicalData";

const companyData = {
  "leave policy": "Employees receive 20 PTO days annually along with company holidays.",
  "vpn access": "VPN access can be requested through IT Service Portal.",
  "dress code": "Smart casual Monday through Thursday. Casual Fridays allowed.",
  "work from home": "Employees can work remotely up to 3 days per week.",
  "health insurance": "Medical, dental and vision benefits begin on day one.",
  laptop: "IT provides MacBook Pro or Windows laptop during onboarding.",
  payroll: "Payroll is processed biweekly every Friday.",
  onboarding: "New employees complete onboarding within first 5 business days."
};

const suggestions = [
  "leave policy",
  "vpn access",
  "react app not running",
  "git merge conflict",
  "docker issue"
];

const categories = [
  "Company",
  "Developer",
  "DevOps",
  "Frontend",
  "Backend",
  "Security"
];

export default function ChatWindow() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi I'm TheDev. Ask me workplace or technical questions."
    }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);

  const sendMessage = (customInput) => {
    const finalInput = customInput || input;

    if (!finalInput.trim()) return;

    const query = finalInput.toLowerCase();

    const userMessage = {
      role: "user",
      text: finalInput
    };

    const response =
      companyData[query] ||
      technicalData[query] ||
      `I couldn't find an exact answer.

Suggested troubleshooting:

1. Check internal documentation
2. Review logs or error messages
3. Verify configuration and access
4. Contact engineering or IT support`;

    const loadingMessage = {
      role: "assistant",
      text: "Thinking..."
    };

    const botMessage = {
      role: "assistant",
      text: response
    };

    setMessages((prev) => [...prev, userMessage, loadingMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev.slice(0, -1), botMessage]);
    }, 700);
  };

  return (
    <div className="chat-wrapper">
      <div className="logo">
        <h1>
          The<span className="accent">Dev</span>
        </h1>

        <p>
          Enterprise AI assistant for company knowledge, developer support and workflows
        </p>
      </div>

      <div className="chat-container">
        <div className="categories">
          {categories.map((item, index) => (
            <button key={index}>{item}</button>
          ))}
        </div>

        <div className="suggestions">
          {suggestions.map((item, index) => (
            <button key={index} onClick={() => sendMessage(item)}>
              {item}
            </button>
          ))}
        </div>

        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              {msg.text}
            </div>
          ))}

          <div ref={bottomRef}></div>
        </div>

        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask workplace or technical questions..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={() => sendMessage()}>Send</button>
        </div>
      </div>
    </div>
  );
}