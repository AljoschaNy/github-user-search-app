import "./Header.css";
import ThemeToggle from "./buttons/ThemeToggle";

type HeaderProps = {
  theme: "dark" | "light",
  onToggleTheme: () => void
}

function Header({theme, onToggleTheme}:Readonly<HeaderProps>) {
  return (
    <header>
      <p className="logo">devfinder</p>
      <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
    </header>
  );
}

export default Header;
