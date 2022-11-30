import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  position: relative;

  input {
    outline: none;
    border: none;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
  }
  .iconContainer {
    position: absolute;
    color: black;
    right: 0;
    font-size: 20px;
    padding: 6px;
  }
  @media screen and (min-width: 768px) {
    .iconContainer {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
    .iconContainer {
      right: 12px;
    }
  }
`;

const SearchBar = () => {
  return (
    <InputContainer>
      <div className="iconContainer">
        <RiSearch2Line />
      </div>
      <input placeholder="검색어를 입력해주세요" />
    </InputContainer>
  );
};

export default SearchBar;
