import "./Header.css";
import ThemeToggle from "./buttons/ThemeToggle";

function Header() {
  return (
    <header>
      <p className="logo">devfinder</p>
      <ThemeToggle mode="dark" />
      <ThemeToggle mode="light" />
    </header>
  );
}

export default Header;
