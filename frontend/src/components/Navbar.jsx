import React from "react";
import { useTheme } from "../themeContext";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";

const Navbar = ({ setLoading, setFilteredFeeds, feeds }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { theme, toggleTheme } = useTheme();

  const toggleMode = () => {
    toggleTheme();
  };

  const goToHome = () => {
    navigate('/');
    window.scrollTo({ top: "0", behavior: "smooth" });
  };

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setFilteredFeeds([]);
      return;
    }

    setLoading(true);
    const lowerQuery = query.toLowerCase();

    let filtered = feeds?.filter((post) =>
      post?.title?.toLowerCase().includes(lowerQuery) ||
      post?.description?.toLowerCase().includes(lowerQuery)
    );

    if (filtered.length === 0) {
      filtered = feeds?.filter((post) =>
        post?.content?.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredFeeds(filtered);
    setLoading(false);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div>
          <p onClick={goToHome} style={{ cursor: "pointer" }}>My Feeds</p>
        </div>

        {location.pathname.startsWith("/post") ? "" : (
          <div>
            <Search onSearch={handleSearch} />
          </div>
        )}

        <div className="mode-switch">
          <label>
            <input
              type="checkbox"
              onChange={toggleMode}
              checked={theme === "dark"}
              className="inp"
            />
            <span className="sliderRound"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
