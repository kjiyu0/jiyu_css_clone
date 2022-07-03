import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Section3 = ({ wheelState }) => {
  const windowHeight = window.innerHeight / 1.2;
  const content = document.querySelector(".content_container");
  const distance = content && content.getBoundingClientRect().top;
  const [sec3Animation, setSec3Animation] = useState();

  const handleScroll = () => {
    // console.log(distance);
    if (distance < windowHeight + 300) {
      setSec3Animation(true);
    } else {
      setSec3Animation(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll); // 스크롤 감지
    };
    scrollListener();
  });

  return (
    <Section3Styled sec3Animation={sec3Animation} wheelState={wheelState} className="content_container">
      <div className="content">
        <p>Kjiyu's</p>
      </div>
      <div className="content">
        <p> Clone Portfolio !</p>
      </div>
      <div className="content">
        <p>@All rights reserved.</p>
      </div>
      <div className="content">
        <p>Celpi 2022</p>
      </div>
    </Section3Styled>
  );
};

export default Section3;
const Section3Styled = styled.div`
  @keyframes ani {
    0% {
      left: inherit;
    }
    100% {
      left: 10rem;
    }
  }
  padding-top: 15rem;
  .content {
    overflow: hidden;
    p {
      font-size: 15rem;
      font-weight: 900;
      color: black;
      position: relative;
      text-shadow: 3px 3px 0 palevioletred, -1px -1px 0 palevioletred, 1px -1px 0 palevioletred, -1px 1px 0 palevioletred, 1px 1px 0 palevioletred;
    }
    &:nth-child(1) {
      p {
        width: 100%;
        left: ${(props) => (props.sec3Animation === true && props.wheelState === "down" ? "10rem" : props.wheelState === "up" ? "90rem" : "110rem")};
        transition: ${(props) => (props.wheelState === "down" ? "8s" : "6s")};
      }
    }
    &:nth-child(2) {
      p {
        width: 100%;
        left: ${(props) => (props.sec3Animation === true && props.wheelState === "down" ? "20rem" : props.wheelState === "up" ? "0rem" : "-20rem")};
        transition: ${(props) => (props.wheelState === "down" ? "8s" : "6s")};
      }
    }
    &:nth-child(3) {
      p {
        width: 100%;
        left: ${(props) => (props.sec3Animation === true && props.wheelState === "down" ? "0rem" : props.wheelState === "up" ? "30rem" : "70rem")};
        transition: ${(props) => (props.wheelState === "down" ? "8s" : "6s")};
      }
    }
    &:nth-child(4) {
      p {
        width: 100%;
        left: ${(props) => (props.sec3Animation === true && props.wheelState === "down" ? "60rem" : props.wheelState === "up" ? "20rem" : "-10rem")};
        transition: ${(props) => (props.wheelState === "down" ? "8s" : "6s")};
      }
    }
  }
`;
