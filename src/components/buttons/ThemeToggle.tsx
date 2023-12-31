import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import "./ThemeToggle.css";

type ThemeToggleProps = {
  mode: "dark" | "light";
};

function ThemeToggle({ mode }: Readonly<ThemeToggleProps>) {
    return (
        <button className={`theme-toggle ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
            <span className="toggle-text">{mode === "dark" ? "light" : "dark"}</span>
            {mode === "dark" ? <SunIcon/> : <MoonIcon />}
        </button>
    );
}

export default ThemeToggle;
