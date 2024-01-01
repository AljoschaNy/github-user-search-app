import { ThemeToggleProps } from "../../type/types";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import "./ThemeToggle.css";

function ThemeToggle({ theme, onToggleTheme }: Readonly<ThemeToggleProps>) {
  return (
    <button
      className={`theme-toggle`}
      onClick={onToggleTheme}
    >
      <span className="toggle-text">{theme === "dark" ? "light" : "dark"}</span>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ThemeToggle;
