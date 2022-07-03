import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../../items/Content";
import Title from "../../items/Title";
import { sliderList } from "./Section6Constant";
import SwiperCore, { Autoplay, Mousewheel } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import theme from "../../../utils/theme";

SwiperCore.use([Mousewheel, Autoplay]);
const Section6 = () => {
  const secRef = useRef();
  const contentRef = useRef(null);
  const ButtonRef = useRef(null);
  const [inSec5, setIsSec5] = useState(false);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    const position = secRef?.current?.getBoundingClientRect?.();
    // console.log(position);
    if (position.y + position.height < 0 || position.y > window.innerHeight) {
      setIsSec5(false);
      setPosition(0);
    } else {
      setIsSec5(true);
      setPosition(secRef.current.getBoundingClientRect().top);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll); // 스크롤 감지
    };
    scrollListener();
  });
  return (
    <Section6Styled position={position} ref={secRef}>
      <Title>
        <h2>NFT</h2>
      </Title>
      <Content ref={contentRef}>
        <h3>
          Celpi는 은하간 NFT 집합체입니다. <br />
          그들만의 독특한 Celpi Universe로 여러분을 초대합니다.
        </h3>
      </Content>
      <button ref={ButtonRef} name="button">
        <div>Go to OpenSea</div>
      </button>
      <Swiper
        modules={[Autoplay]}
        grabCursor="true"
        centeredSlides="true"
        loopFillGroupWithBlank={true}
        autoplay={{
          enabled: true,
          delay: 1,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={7}
        loop="true"
        freeMode="true"
        speed={3000}
      >
        {sliderList &&
          sliderList.map((v, i) => (
            <SwiperSlide>
              <img src={v.image_url} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Section6Styled>
  );
};

export default Section6;
const Section6Styled = styled.div`
  /* border: solid 2px red; */
  height: 70rem;
  background: #111111;
  .title {
    transform: ${(props) => (props.position === 0 ? "translate(0,50rem)" : "translate(0, 7.5rem)")};
    opacity: ${(props) => (props.position === 0 ? 0 : 1)};
    transition: 1s;
  }
  .content {
    h3 {
      color: white;
      margin-top: 1rem;
      font-weight: 500;
      transform: translate(0, 0rem);
      opacity: ${(props) => (props.position === 0 ? 0 : 1)};
      transition: 1s;
      transition-delay: 0.5s;
    }
  }
  .swiper-container {
    /* border: solid 2px blue; */
    /* height: 30rem; */
    opacity: ${(props) => (props.position === 0 ? 0 : 1)};
    transform: translate(0, 5rem);
    transition: 1s;
    transition-delay: 1s;
  }
  button {
    position: relative;
    left: 50%;
    top: 5rem;
    opacity: ${(props) => (props.position === 0 ? 0 : 1)};
    transform: translate(-50%, -50%);
    transition: 1s;
    padding: 1.5rem 5rem;
    background: white;
    box-shadow: 0 1px 10px 0px grey;
    &:hover div {
      color: white;
    }
    div {
      position: relative;
      transition: 0.25s;
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
      transition: 0.25s;
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
`;
