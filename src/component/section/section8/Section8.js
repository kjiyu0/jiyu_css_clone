import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { profileList } from "./Section8Constant";
import Content from "../../items/Content";
import Title from "../../items/Title";
import icon from "../../../utils/img/section07_icon.png";
import "./Section8styled.scss";
import theme from "../../../utils/theme";

const Section8 = () => {
  const ref = useRef([]);
  const profileRef = useRef([]);
  const refCurrent = ref.current;
  const profileRefCurrent = profileRef.current;

  const handleScroll = () => {
    profileRefCurrent.map((v, i) => {
      if (v.getBoundingClientRect().y > window.innerHeight) {
        v.classList.remove(`position_on${i + 1}`);
      } else {
        v.classList.add(`position_on${i + 1}`);
      }
    });

    profileRefCurrent.map((v, i) => {
      //   if (refCurrent[2].y + refCurrent[2].height < 0 || refCurrent[2].getBoundingClientRect().y > window.innerHeight) {
      //     const setTime = setInterval(() => {
      //       v.classList.remove("position_on");
      //     }, 5000);
      //     return () => clearInterval(setTime);
      //   } else {
      //     const setTime = setInterval(() => {
      //       v.classList.add("position_on");
      //     }, 5000);
      //     return () => clearInterval(setTime);
      //   }
    });
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", handleScroll); // 스크롤 감
    };
    scrollListener();
  });
  return (
    <Section8Styled>
      <Title>
        <h2 ref={(el) => (refCurrent[0] = el)}> Team </h2>
      </Title>

      <Content>
        <div className="content" ref={(el) => (refCurrent[1] = el)}>
          <p>
            Celpi팀의 무궁무진한 노력과 열정적인 자세 때문에 아주 난감하기도 합니다.
            <br />
            이들은 매우 열정적이라서 때로는 사무실에서 쫓아내기도 한다구요.
          </p>
          <p>
            예술가, 소셜 커뮤니티 관리자, 블록체인전문가, 마케팅 괴짜들로 이루어진 <br />
            Celpi팀은 커뮤니티가 번영하고 Collect-To-Earn 아이디어가 <br />
            계속 살아가게 하기 위해 무엇이든 할 것입니다.
          </p>
        </div>
      </Content>

      <div className="profile_content" ref={(el) => (refCurrent[2] = el)}>
        {profileList?.map((v, i) => (
          <div className={`profile_wrap${i + 1} profile_wrap`} ref={(el) => (profileRefCurrent[i] = el)}>
            <div className="image_wrap">
              <img src={v.image_url} className="profile_img" />
              <img src={icon} className="icon" />
            </div>
            <p>{v.name}</p>
          </div>
        ))}
      </div>
    </Section8Styled>
  );
};

export default Section8;
const Section8Styled = styled.div`
  padding: 10rem 0;
  .content {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  .profile_content {
    display: flex;
    justify-content: center;
    /* width: 90vw; */
    /* width: 80vw; */
    /* transform: translate(-50%, -50%); */
    /* left: 50%; */
  }
  .profile_wrap {
    width: 20%;
    position: relative;
    margin: 0 1rem;
    height: 30rem;
    .icon {
      position: absolute;
      right: 0;
      bottom: 5rem;
    }
    .profile_img {
      width: 80%;
      transform: translate(-50%, 0);
      position: relative;
      left: 50%;
    }
    p {
      color: white;
      font-size: ${theme.fontSizes.lg};
      font-weight: 600;
      text-align: center;
      margin-top: 2rem;
    }
  }
`;
