import React from "react";
import styled from "styled-components";
import theme from "../../utils/theme";

const Content = ({ children, animationTarg, changeValue, className, ref, style, name }) => {
  return (
    <ContentStyled
      name="conrtent"
      style={style}
      animationTarg={animationTarg}
      changeValue={changeValue}
      className={className ? className : "content"}
      ref={ref}
    >
      {children}
    </ContentStyled>
  );
};

export default Content;
const ContentStyled = styled.div`
  /* border: solid 2px red; */
  margin-top: 10rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .sec4_img {
    /* position: absolute; */
    position: relative;
    top: 0rem;
    border-radius: 6rem;
    width: 20vw;
    &.blue_ufo {
      left: 0rem;
    }
    &.green_ufo {
      right: 0rem;
    }
  }
  h3 {
    font-size: 3rem;
    font-weight: 900;
  }
  p {
    font-size: ${theme.fontSizes.base};
    white-space: pre-wrap;
    color: white;
    margin: 3rem 0;
  }
  span {
    font-size: ${theme.fontSizes.base};
    white-space: pre-wrap;
    color: deeppink;
  }
`;
