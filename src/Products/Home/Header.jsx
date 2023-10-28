import { Link, Outlet } from "react-router-dom";
import Search from "../SearchComponent/Search";

function Header() {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul className="navigation_list">
            <div className="search">
              <li>
                <Link to="/">
                  <span style={{ color: "white" }}>
                    <img
                      style={{ width: "80px", paddingTop: "5px" }}
                      alt="gif"
                      src="/ecommerce.gif"
                    ></img>
                  </span>{" "}
                  <div
                    className="logo"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      color: "white",
                      fontFamily: "fantasy",
                      fontWeight: "2px",
                    }}
                  >
                    Stellar Junction
                  </div>
                </Link>
              </li>
              <li>
                <Search />
              </li>
            </div>
            <div className=" nav-list-two">
              <li>
                <Link to="/">
                  <span className="prod">Products</span>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <span className="prod">🛒</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/profile">
                  {" "}
                  <span className="prod">Profile</span>
                </Link>
              </li> */}
            </div>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
