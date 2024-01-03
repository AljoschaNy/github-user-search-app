import { useEffect, useState } from "react";
import RegularButton from "../buttons/RegularButton";
import SearchSvg from "../icons/SearchSvg";
import "./Searchbar.css";
import { SearchbarProps } from "../../type/types";

function Searchbar({ setUserData }:Readonly<SearchbarProps>) {
  const[searchInput, setSearchInput] = useState("");
  const[user, setUser] = useState("octocat");
  
  const fetchUserData = async ():Promise<void> => {
    const endpoint = "https://api.github.com/users/" + user.toLowerCase();

    try {
      const response = await fetch(endpoint);

      if(response.ok) {
        const userData = await response.json();
        setUserData(userData);
        console.log(userData);
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleSearch = () => {
    setUser(searchInput);
    setSearchInput("");
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      handleSearch();
  }
  }

  useEffect(() => {
    fetchUserData();
  }, [user])

  return (
    <section className="searchbar">
      <div className="search-icon">
        <SearchSvg />
      </div>
      <input
        type="text"
        className="searchbar-input"
        name="user-search"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search GitHub username..."
      />
      <div className="searchbar-button">
        <RegularButton  buttonText={"Search"} onClick={handleSearch} />
      </div>
    </section>
  );
}

export default Searchbar;
