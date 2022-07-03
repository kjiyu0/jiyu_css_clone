import React, { useEffect } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import styled from "styled-components";

const MainLayout = ({ children, id }) => {
  useEffect(() => {}, []);
  return (
    <MainLayoutStyled>
        {children}
    </MainLayoutStyled>
  );
};

export default MainLayout;

const MainLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  overflow: hidden;
  position: relative;
  /* position: fixed !important; */
`;
