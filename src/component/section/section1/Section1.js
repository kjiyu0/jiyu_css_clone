import React from "react";
import styled from "styled-components";
import bg from "../../../utils/img/section01_bg.jpg";
import theme from "../../../utils/theme";

const Section1 = () => {
  return (
    <Section1Styled>
      <div className="bgContainer">
        <img src={bg}></img>
        <div className="title">
          <p>Celpi</p>
          <button>
            <div>Go to OpenSea</div>
          </button>
        </div>
      </div>
    </Section1Styled>
  );
};

export default Section1;
const Section1Styled = styled.div`
  @keyframes up_title {
    0% {
      transform: translate(0, 100%);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  @keyframes up_bt {
    0% {
      transform: translate(-50%, 100%);
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }

  height: 69rem;
  /* width: 100vw; */
  .bgContainer {
    overflow: hidden;
    height: 90%;
    position: relative;
    img {
      height: 120%;
      position: relative;
      left: 50%;
      transform: translate(-50%, -5%);
    }
    .title {
      position: absolute;
      height: auto;
      width: 100%;
      top: 45%;
      transform: translate(0, -50%);
      p {
        text-align: center;
        font-size: 13rem;
        color: white;
        font-weight: 900;
        text-shadow: 0 3px 10px #111111;
        transform: translate(0, 0);
        animation-name: up_title;
        animation-duration: 1s;
      }
      button {
        position: relative;
        left: 50%;
        top: 5rem;
        transform: translate(-50%, -50%);
        padding: 1.5rem 5rem;
        background: white;
        box-shadow: 0 1px 10px 0px grey;
        animation-name: up_bt;
        animation-duration: 1.5s;
        &:hover div {
          color: white;
        }
        div {
          position: relative;
          transition: 0.5s;
          transition-delay: 0.1s;
          color: black;
          z-index: 1;
          font-size: ${theme.fontSizes.base};
        }
        &:before {
          content: "";
          background: violet;
          width: 0px;
          height: 100%;
          position: absolute;
          left: 50%;
          top: 0%;
          transition: cubic-bezier(0.65, 0, 0.35, 1) 0.5s;
          opacity: 0;
        }
        &:hover::before {
          content: "";
          width: 100%;
          position: absolute;
          left: 0%;
          opacity: 1;
        }
      }
    }
  }
`;
