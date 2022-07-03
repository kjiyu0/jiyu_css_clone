import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "../../../utils/theme";
import Title from "../../items/Title";
import { phase1, phaseFunc } from "./Section7Constant";
import bg from "../../../utils/img/section06_bg.jpg";

const Section7 = () => {
  const phaseRef = useRef([]);
  const phase = phaseRef.current;

  const handleScroll = () => {
    phase.map((v, i) => {
      if (v.getBoundingClientRect().y > window.innerHeight) {
        v.classList.remove("position_on");
      } else {
        console.log("zoom in!");
        v.classList.add("position_on");
      }
    });
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll); // 스크롤 감
    };
    scrollListener();
  });

  return (
    <Section7Styled>
      <Title>
        <h2>The RoadMap</h2>
      </Title>
      <div className="phase_container">
        {phaseFunc(-5).map((v, i) => (
          <div className="phase_box" ref={(el) => (phaseRef.current[i] = el)}>
            {v.map((value, index) => (
              <div className="parse_wrap">
                {index === 0 ? (
                  <h3 className="left">Parse{i + 1}</h3>
                ) : (
                  <h3 className="left" style={{ opacity: 0 }}>
                    Parse{i + 1}
                  </h3>
                )}
                <div className="right">
                  <div>
                    <ul>
                      <p className="per">{value.percent}%</p>
                      <li>
                        <h4>{value.title}</h4>
                        <h6>{value.content}</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section7Styled>
  );
};

export default Section7;
const Section7Styled = styled.div`
  overflow: hidden;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 15rem 0;
  .title {
    h2 {
      color: purple;
      text-shadow: 1px 1px 0 #eee, 0 0 0 #000, 1px 1px 0 #eee;
    }
  }
  .phase_container {
    h3,
    div,
    p,
    h4 {
      color: white;
    }
  }
  h3 {
    font-size: ${theme.fontSizes.xl};
  }
  h4,
  .per {
    font-size: ${theme.fontSizes.base};
  }
  h6 {
    font-size: ${theme.fontSizes.small};
    white-space: pre-wrap;
    color: grey;
    margin: 1rem 0;
  }
  .phase_container {
    .parse_wrap {

      display: flex;
      > h3:first-child {
        color: white;
        font-weight: 600;
      }
      .right {
        margin-left: 2.5rem;
        ul {
          margin: 1rem 0;
          display: flex;
          width: 100%;
          .per {
            width: 10rem;
          }
          li {
            width: 100%;
          }
          h4 {
            font-weight: 700;
          }
        }
      }
    }
  }
  .phase_box {   
    position: relative;   
    width: auto;
    margin: 2.5rem 0;
    padding-right: 20rem;
    transform: translate(40rem, 0);
    opacity: 0;
    transition: 2s;
  }
  .position_on {
    opacity: 1;
    transform: translate(10rem, 0);
  }
`;
