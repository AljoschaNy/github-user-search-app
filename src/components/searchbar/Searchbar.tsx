import { useEffect, useState } from "react";
import RegularButton from "../buttons/RegularButton";
import SearchSvg from "../icons/SearchSvg";
import "./Searchbar.css";

function Searchbar() {
  const[searchInput, setSearchInput] = useState("");
  const[user, setUser] = useState("octocat");
  const[userData, setUserData] = useState();
  
  const fetchUserData = async ():Promise<void> => {
    const endpoint = "https://api.github.com/users/" + user.toLowerCase();

    try {
      const response = await fetch(endpoint);

      if(response.ok) {
        const userInfo = await response.json();
        setUserData(userInfo);
        console.log(userInfo);
      }
    } catch(error) {
      console.log(error);
    }
  }

  const handleSearch = () => {
    setUser(searchInput);
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
        onChange={(event) => setSearchInput(event.target.value)}
        placeholder="Search GitHub username..."
      />
      <div className="searchbar-button">
        <RegularButton  buttonText={"Search"} onClick={handleSearch} />
      </div>
    </section>
  );
}

export default Searchbar;
