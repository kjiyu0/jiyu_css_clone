import React, { useEffect, useState, useMemo, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { characterList } from "./Section5Constant";
import Title from "../../items/Title";
import Content from "../../items/Content";

SwiperCore.use([Pagination, EffectCoverflow, Navigation]);

const Section5 = () => {
  const secRef = useRef();
  const preButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    const position = secRef?.current?.getBoundingClientRect?.();
    if (position.y + position.height < 0 || position.y > window.innerHeight) {
      setPosition(0);
    } else {
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
    <Section5Styled ref={secRef} position={position}>
      <Swiper
        className="photo-container"
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={0}
        slidesPerView={2}
        navigation={{
          prevEl: preButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        loop="true"
        coverflowEffect={{
          rotate: 20,
          stretch: 25,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        breakpoints={{
          700: {
            spaceBetween: -100,
            slidesPerView: 3,
          },
          500: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          411: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          300: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
      >
        {characterList &&
          characterList.map((v, i) => (
            <SwiperSlide>
              <img src={v.image_url} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="button_container">
        <div className="button_wrap">
          <button className="prev" ref={preButtonRef}>
            Previous
          </button>
          <button className="next" ref={nextButtonRef}>
            Next
          </button>
        </div>
      </div>
      <div className="sec5_content">
        <Title>
          <h2>
            Celpi <p>with</p> BAYC
          </h2>
        </Title>
        <Content style={{ display: "block" }} className={"content"}>
          <h3>Celpi는 BAYC와 함께 합니다.</h3>
          <p>
            Celpi NFT는 NFT프로젝트를 위하여 Collaborate가능한 모든 NFT들을 <br />
            컬렉팅 하고있습니다. <span>그중 첫번째 챕터가 BAYC입니다.</span>
          </p>
          <p>
            Bored Ape Yacht Club(#2771), Mutant Ape Yacht Club(#15454), Mutant Ape Yacht Club(#1701), Bored Ape Kennel Club(#4602), Bored Ape Kennel Club(#3113)
            <span>첫번째 셀피유니버스의 조력자들</span> 입니다.
          </p>
        </Content>
      </div>
    </Section5Styled>
  );
};

export default Section5;
const Section5Styled = styled.div`
  display: flex;
  height: 60rem;
  justify-content: center;
  align-items: center;
  .sec5_content {
    overflow: hidden;
    width: 50%;
    /* text-align: center; */
    padding: 0 1rem;

    h2 {
      text-align: left;
      transform: ${(props) => (props.position === 0 ? "translate(0,10rem)" : "translate(0, 0rem)")};
      opacity: ${(props) => (props.position === 0 ? 0 : 1)};
      transition: 0.25s;
      display: flex;
      p {
        display: block;
        opacity: ${(props) => (props.position === 0 ? 0 : 1)};
        transition: 1s;
        transition-delay: 0.75s;
        padding: 0 2rem;
        transform: translate(0, 3rem);
      }
    }
    .content {
      transform: ${(props) => (props.position === 0 ? "translate(0,50rem)" : "translate(0, 0rem)")};
      opacity: ${(props) => (props.position === 0 ? 0 : 1)};
      /* border: solid 2px red; */
      transition-delay: 1.5s;
      transition: 1s;
    }
    h3 {
      text-align: left;
      font-size: 3rem;
      color: white;
    }
    p {
      text-align: left;
      line-height: 2.7rem;
      transition: 0.75s;
    }
  }
  .swiper-slide {
    /* width: 50%; */
    overflow: hidden;
    border-radius: 2rem;
    /* height: 10rem; */
    > img {
      /* height: 100%; */
      /* border: solid 2px red; */
    }
  }
  .button_container {
    position: absolute;
    left: 0;
    width: 50%;
    z-index: 99;
    .button_wrap {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 20rem;
    }
    button {
      width: 7rem;
      padding: 1rem;
      color: white;
      font-size: 1.7rem;
      margin: 0 1rem;
    }
  }
  .photos {
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-right: 0;
    -webkit-box-reflect: below 0.01px linear-gradient(transparent, transparent, #0006);
  }
  .photo-container {
    /* height: 60vh; */
    width: 40%;
    display: flex;
    align-items: center;
    padding: 10rem 2.5rem;
  }
  .swiper-slide-active {
    transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale(1.2) !important;
    box-shadow: 0px 0px 7rem 1px white;
  }

  .swiper-slide:not(.swiper-slide-active) {
    filter: brightness(0.8);
  }
  .swiper-slide:not(.swiper-slide-active, .swiper-slide-prev, .swiper-slide-next) {
    filter: brightness(0.6);
  }
`;
