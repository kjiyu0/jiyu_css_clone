import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../utils/theme";
import { menuList, menuListObj } from "./HeaderContant";

// ✔ header: fixed, 반응형(mobile&tablet) 적용시 햄버거메뉴 안에 들어간다.

const Header = (props) => {
  const { wheelState } = props;
  return (
    <HeaderLayout wheelState={wheelState}>
      <ul>
        <li className="menuTitle">Celpi</li>
        {menuList.map((v, i) => (
          <li>{v.name}</li>
        ))}
      </ul>
    </HeaderLayout>
  );
};

export default Header;
const HeaderLayout = styled.div`
  /* response */
  height: 12.5rem;
  position: fixed;
  padding-top: 5rem;
  padding-bottom: 5rem;
  width: 100vw;
  z-index: 1;
  top: ${(props) => (props.wheelState === "" ? "0" : props.wheelState === "up" ? 0 : "-20rem")};
  background: ${(props) => (props.wheelState === "" ? "" : props.wheelState === "up" ? "black" : "")};
  transition: 1s;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    transform: translate(5%, 0);
    .menuTitle {
      font-weight: 600;
      font-size: ${theme.fontSizes.xl};
      margin-left: 1rem;
    }
    li {
      font-size: ${theme.fontSizes.base};
      cursor: pointer;
      margin-right: 4.5rem;
      color: white;
      position: relative;
      transition: 0.5s;
      &:not(:first-child)::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 0.5rem;
        left: 0;
        top: 100%;
        background: plum;
        opacity: 0;
        transition: 0.5s;
      }
      &:not(:first-child):hover::after {
        opacity: 1;
        position: absolute;
        width: 100%;
        left: 0;
        top: 100%;
        content: "";
      }
    }
  }
`;
