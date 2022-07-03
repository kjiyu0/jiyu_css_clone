import React from "react";
import styled from "styled-components";
import theme from "../../utils/theme";

const Title = ({ children, style, ref }) => {
  return (
    <TitleStyled style={style} className="title" ref={ref} name="title">
      {children}
    </TitleStyled>
  );
};

export default Title;
const TitleStyled = styled.div`
color: white;
  h2 {
    font-size: ${theme.fontSizes.xxl};
    font-weight: 900;
    text-align: center;
    color: white;
  }
  > h3 {
    margin-top: 1rem;
  }
`;
