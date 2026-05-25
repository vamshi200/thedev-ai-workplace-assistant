import "./App.css";
import { motion } from "framer-motion";
import { Search, FileText, Users, Sparkles } from "lucide-react";

function App() {

  const cards = [
    {
      icon: <Search size={35} />,
      title: "Knowledge Search",
      desc: "Find company information instantly."
    },
    {
      icon: <Users size={35} />,
      title: "Employee Onboarding",
      desc: "Guide employees from day one."
    },
    {
      icon: <FileText size={35} />,
      title: "Company Docs",
      desc: "Policies, SOPs, and workflows."
    },
    {
      icon: <Sparkles size={35} />,
      title: "AI Assistant",
      desc: "Ask workplace questions instantly."
    }
  ];

  return (
    <div className="container">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="title"
      >
        TheDev
      </motion.h1>

      <p className="subtitle">
        Your AI workplace assistant for instant company knowledge
      </p>

      <div className="buttons">

        <button className="primary">
          Get Started
        </button>

        <button className="secondary">
          Ask TheDev
        </button>

      </div>

      <div className="cards">

        {cards.map((card, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="card"
          >

            {card.icon}

            <h3>{card.title}</h3>

            <p>{card.desc}</p>

          </motion.div>

        ))}

      </div>

    </div>
  );
}

export default App;