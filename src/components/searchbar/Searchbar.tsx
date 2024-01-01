import RegularButton from "../buttons/RegularButton";
import "./Searchbar.css";

function Searchbar() {
    return (
        <section className="searchbar">
            <p>o</p>
            <input 
                type="text" 
                className="searchbar-input" 
                placeholder="Search GitHub username..."
            />
            <div className="searchbar-button">
                <RegularButton buttonText={"Search"} />
            </div>
        </section>
    );
}

export default Searchbar;
