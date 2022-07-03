import React, { useEffect } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import styled from "styled-components";

const MainLayout = ({ children, id }) => {
  useEffect(() => {}, []);
  return (
    <MainLayoutStyled>
      <Scrollbar
        className="custom-class"
        onScroll={(e) => {
          window.localStorage.setItem("offset_y", e.offset.y);
          console.log(e.offset.y);
        }}
      >
        {children}
      </Scrollbar>
    </MainLayoutStyled>
  );
};

export default MainLayout;

const MainLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  /* position: fixed !important; */
`;
