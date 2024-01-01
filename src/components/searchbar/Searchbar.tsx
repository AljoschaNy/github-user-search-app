import RegularButton from "../buttons/RegularButton";
import SearchSvg from "../icons/SearchSvg";
import "./Searchbar.css";

function Searchbar() {
  return (
    <section className="searchbar">
      <div className="search-icon">
        <SearchSvg />
      </div>
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
