import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div className="container">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Searchbar />
    </div>
  );
}

export default App;
