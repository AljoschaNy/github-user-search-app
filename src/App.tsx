import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import UserCard from "./components/main/UserCard";
import { UserData } from "./type/types";

function App() {
  const [theme, setTheme] = useState<string>(document.documentElement.className);
  const [userData, setUserData] = useState<UserData>();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <div className="container">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Searchbar setUserData={setUserData} />
      {userData && <UserCard userData={userData} />}
    </div>
  );
}

export default App;
