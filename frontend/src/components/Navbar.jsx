import React from "react";
import "../App.css";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 58bd74b (final)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2>My Feeds</h2>
      </div>
    </nav>
<<<<<<< HEAD
=======
=======
import {useTheme} from "../themeContext";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
// import { fetchData } from "../utils/fetchData";


const Navbar = ({setLoading,setFilteredFeeds,feeds}) => {
  const navigate = useNavigate()
  const location = useLocation();

  const {theme, toggleTheme} = useTheme();


  const toggleMode = () => {
    toggleTheme();
  };

  const goToHome=() => {
    navigate('/')
    window.scrollTo({ top: "0", behavior: "smooth"})
  }

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setFilteredFeeds([]);
      return;
    }
    
    setLoading(true);
    // const results = await fetchData(0, 100); 
  
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
        <p onClick={goToHome} style={{cursor:"pointer"}}>My Feeds</p>
      </div>

      {location.pathname.startsWith("/post")?"":<div>
          <Search onSearch={handleSearch} />
      </div>} 

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
>>>>>>> 46eb6ca (final)
>>>>>>> 58bd74b (final)
  );
};

export default Navbar;
