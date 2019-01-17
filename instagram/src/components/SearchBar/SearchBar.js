import React from "react";
import instaLogo from "./../../images/instaLogo.png";
import styled, { css } from "styled-components";

import "./searchbar.css";

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
`;

const SearchInput = styled.input`
  width: 35%;
  height: 20px;
`;

const SearchSymbol = styled.span`
  font-size: 1.4rem;
`;


const SearchLogoImg = styled.img`
  width: 15%;
  border-left: 1px solid black;
  padding-left: 3%;
`;





const SearchBar = props => {
  return <SearchContainer>
      <SearchSymbol>
        <i className="fab fa-instagram" />
      </SearchSymbol>
      <SearchLogoImg src={instaLogo} />
      <SearchInput type="text" placeholder="Search" value={props.searchInput} name="searchInput" onChange={props.handleChange} />
      <SearchSymbol>
        <i className="far fa-compass" />
      </SearchSymbol>
      <SearchSymbol>
        <i className="far fa-heart" />
      </SearchSymbol>
      <SearchSymbol>
        <i className="far fa-user" />
      </SearchSymbol>
      <button onClick={props.logout}>Logout</button>
    </SearchContainer>;
};

export default SearchBar;
