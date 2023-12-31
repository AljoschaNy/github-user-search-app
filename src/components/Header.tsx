import "./Header.css";
import SunIcon from "./icons/SunIcon";

function Header() {
  return (
    <header>
      <p className="logo">devfinder</p>
      <button className="theme-toggle dark-mode">
        <span className="toggle-text">light</span>
        <SunIcon />
      </button>
      <button className="theme-toggle light-mode">
        <span className="toggle-text">dark</span>
        <img src="src/assets/icon-moon.svg" alt="moon icon" />
      </button>
    </header>
  );
}

export default Header;
