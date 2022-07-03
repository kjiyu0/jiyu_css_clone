import React, { useEffect, useState } from "react";
import Header from "../component/header/Header";
import MainLayout from "../component/mainLayout/MainLayout";
import Section1 from "../component/section/section1/Section1";
import Section2 from "../component/section/section2/Section2";
import Section3 from "../component/section/section3/Section3";
import Section4 from "../component/section/section4/Section4";
import Section5 from "../component/section/section5/Section5";
import Section6 from "../component/section/section6/Section6";
import Section7 from "../component/section/section7/Section7";
import Section8 from "../component/section/section8/Section8";

const MainPage = () => {
  const [wheelState, setWheelState] = useState(""); // header 에 필요
  const content = document.querySelector(".content_container");

  window.addEventListener("wheel", (event) => {
    if (event.wheelDelta > 0) {
      setWheelState("up");
    } else {
      setWheelState("down");
    }
  });

  return (
    <MainLayout id="smooth-scroll">
      <Header wheelState={wheelState} />
      <Section1 />
      <Section2 />
      <Section3 wheelState={wheelState} />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </MainLayout>
  );
};

export default MainPage;
