import React, { useEffect, useState, useMemo, useRef } from "react";
import styled from "styled-components";
import blueUFO from "../../../utils/img/section05_img1.jpg";
import greenUFO from "../../../utils/img/section05_img2.jpg";
import theme from "../../../utils/theme";
import bg from "../../../utils/img/section05_bg.jpg";
import Title from "../../items/Title";
import Content from "../../items/Content";

const Section4 = () => {
  const secRef = useRef();
  const [positionState, setPositionState] = useState(0);
  const [sec4Animation, setSec4Animation] = useState(false);
  const [movingValue, setMovingValue] = useState(0);
  // console.log(position);

  const handleScroll = () => {
    // console.log(window_offset);
    const position = secRef?.current?.getBoundingClientRect?.();
    if (position.y + position.height < 0 || position.y > window.innerHeight) {
      setPositionState(0);
    } else {
      setPositionState(secRef.current.getBoundingClientRect().top);
    }
  };
  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll); // 스크롤 감지
    };
    scrollListener();
  });

  return (
    <Section4Styled position={positionState} role="image" aria-label="in club">
      <Title>
        <h2>Celpi</h2>
        <h3>PFP NFT Project</h3>
      </Title>
      <div ref={secRef}>
        <Content animationTarg={sec4Animation} changeValue={movingValue} className="content">
          <img src={blueUFO} alt="blue ufo" className="blue_ufo sec4_img" />
          <div className="content">
            <h3>Celpi, 셀피 NFT란?</h3>
            <p>
              <span>Celpi</span>(셀피)는 Klaytn을 시작점으로 하여 <span>M2E(Market to Earn)</span>를 <br /> 추구하는 PFP NFT 프로젝트입니다.
            </p>
            <p>
              Celpi NFT를 운영하는데 있어서 가장 중요한 비전은 홀더들에게 프라이빗한 <br /> 혜택을 제공함과 더불어, 협업 커뮤니티 운영을 통하여 수익화에 초점을{" "}
              <br />
              맞추었습니다. Celpi NFT를 소유한 유저는 커뮤니티 또는 DAO에서 <br /> 자유로운 영향력을 발휘하여, 프로젝트 방향성을 선택 할 수 있습니다.
            </p>
            <p>
              <span>Celpi</span>는 안정적인 NFT 민팅 후에 Mining 시스템 오픈, 클레이스왑 DeFi <br /> 오픈, 타 NFT 프로젝트와의 협업, 프라이빗한 오프라인 혜택,
              대규모 이벤트 등 <br />
              <span>NFT를 기반으로 하는 다양한 사업을 영위 할 예정</span>입니다.
            </p>
          </div>
          <img src={greenUFO} alt="green ufo" className="green_ufo sec4_img" />
        </Content>
      </div>

      {/* <div className="fixed2">{position}</div> */}
    </Section4Styled>
  );
};

export default Section4;
const Section4Styled = styled.div`
  height: 90rem;
  padding-top: 15rem;
  position: relative;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  h3 {
    font-size: ${theme.fontSizes.lg};
    text-align: center;
    color: white;
  }
  .fixed {
    background: red;
    position: fixed;
    z-index: 999;
    top: 0;
    color: white;
    font-size: 10rem;
  }
  .fixed2 {
    background: blue;
    position: fixed;
    z-index: 999;
    top: 10rem;
    color: white;
    font-size: 10rem;
  }
  .sec4_img {
    top: ${(props) => props.position * -0.03}rem;
    transition: 1s;
    transition-delay: 0;
  }
  .title {
    opacity: ${(props) => (props.position === 0 ? 0 : 1)};
    transform: ${(props) => (props.position === 0 ? "translate(0,2rem)" : "translate(0,0.5rem)")};
    transition: 1s;
  }
  .content {
    opacity: ${(props) => (props.position === 0 ? 0 : 1)};
    /* transition-delay: s; */
    /* transform: ${(props) => (props.position === 0 ? "translate(0,10rem)" : "translate(0,0rem)")}; */
    /* transition-duration: 2s; */
    transition: 0.5s;
    transition-delay: 0.5s;
  }
`;
