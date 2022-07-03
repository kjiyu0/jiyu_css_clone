import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import theme from "../../../utils/theme";
import section2bg from "../../../utils/img/section02.jpg";
import "./Section2styled.scss";
import { section2images } from "./SectionConstant";

const Section2 = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const onSlide = (e) => {
    setSlideIndex(e + 1);
  };
  return (
    <Section2tyled>
      <div className="content">
        셀피 총사령관 아이언 B는 커버넌트 호를 타고
        <p />
        함장 스켈레턴(스켈레턴 비행 부대)과 블레이즈 장군(블레이즈 공격 부대)를 이끌고 지구로 향한다 .<p />
        화성에서 잡은 도지들을 합성해 재탄생 시킨 스톰장갑부대와 다크유디티 부대를 이끌고ᆢ <p />
        이들은 커버넌트 호에서 지구인들에게 침투하기위한
        <p />
        고양이 형상으로 변형을 하며 머나먼 여정을 떠난다.
        <p />
      </div>
      <div className="slide">
        <ImageGallery items={section2images} onSlide={onSlide} autoPlay={true} />
      </div>
      <div className="description">
        <div className="desWrap">{section2images.map((v, i) => v.thumbnailClass === `index${slideIndex}` && <p>{v.description}</p>)}</div>
      </div>
    </Section2tyled>
  );
};

export default Section2;

const Section2tyled = styled.div`
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  width: 100%;
  background-image: url(${section2bg});
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center; */
  background-position-x: 50%;
  background-position-y: 20rem;
  padding-bottom: 5rem;
  .content {
    margin-top: 10rem;
    font-size: ${theme.fontSizes.base};
    color: white;
    text-align: center;
    line-height: 3.5rem;
    /* height: 20rem; */
  }
  .slide {
    margin-top: 10rem;
    padding-top: 20rem;
    .image-gallery {
      position: relative;
      height: 85rem;
    }
    .image-gallery-slides {
      overflow: hidden;
      position: relative;
      height: 85rem;
      top: 20rem;
    }
    .image-gallery-image {
      width: 120rem;
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .image-gallery-thumbnail {
      margin: 0 10px;
      position: relative;
    }
    .image-gallery-thumbnails-container {
      width: 100%;
      position: absolute;
      top: 0;
      display: flex;
      justify-content: center;
      height: 20rem;
    }
    .image-gallery-description {
      display: none;
    }
  }
  .description {
    background: #555555;
    height: 25rem;
    width: 120rem;
    margin: 0 auto;
    .desWrap {
      width: 100%;
      padding: 3rem;
      height: 100%;
      p {
        font-size: 2rem;
        color: white;
        white-space: pre-line;
        animation-name: opacity;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
      }
    }
  }
`;
