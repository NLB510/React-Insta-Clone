import React from "react";
import instaLogo from "./../../images/instaLogo.png";
import "./searchbar.css";

const SearchBar = props => {
  return (
    <div className="searchbar-container">
      <span className="instagram-logo">
        <i className="fab fa-instagram" />
      </span>
      <img src={instaLogo} className="instagram-font-logo" />
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search"
        value={props.searchInput}
        name="searchInput"
        onChange={props.handleChange}
      />
      <span className="searchbar-symbol">
        <i className="far fa-compass" />
      </span>
      <span className="searchbar-symbol">
        <i className="far fa-heart" />
      </span>
      <span className="searchbar-symbol">
        <i className="far fa-user" />
      </span>
    </div>
  );
};

export default SearchBar;
