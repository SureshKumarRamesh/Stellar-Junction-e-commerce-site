import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const navRoute = () => {
    navigate({
      pathname: "/search",
      search: `?filter=${search}`,
    });
  };

  const enterRoute = () => {
    navigate({
      pathname: "/search",
      search: `?filter=${search}`,
    });
  };

  return (
    <>
      <div className="searchbar-background">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Explore The Treasures 😉"
            className="search-input"
            onInput={(event) => setSearch(event.target.value)}
          />
          <button
            style={{
              padding: "4px",
              backgroundColor: "whitesmoke",
              cursor: "pointer",
              fontFamily: "Gill Sans",
              "Gill Sans MT": "Calibri",
              "Trebuchet MS": "sans-serif",
            }}
            id="button-search"
            onClick={navRoute}
          >
            Go
          </button>
        </div>
      </div>
    </>
  );
}
export default Search;
