import { ThemeToggleProps } from "../../type/types";
import "./Header.css";
import ThemeToggle from "../buttons/ThemeToggle";

function Header({ theme, onToggleTheme }: Readonly<ThemeToggleProps>) {
  return (
    <header>
      <p className="logo">devfinder</p>
      <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
    </header>
  );
}

export default Header;
