import React from "react";
import styled from "styled-components";
import Title from "../../items/Title";
import bg from "../../../utils/img/f_bg.png";
import theme from "../../../utils/theme";

const Footer = () => {
  return (
  <FooterStyled>
    <h1>Celpi</h1>
    <div className="footer_container">
      <div>
        <p>@All rights reserved. Celpi 2022</p>
        <a>Terms Of Use</a>
        <a>Privacy Policy</a>
        <p>This is Kjiyu's protfolio for css/javascript(react).</p>
      </div>
      <div>
        <h3>SOCIAL LINK</h3>
      </div>
    </div>
  </FooterStyled>)
};

export default Footer;

const FooterStyled = styled.div`
background-image: url(${bg});  
background-repeat: no-repeat;
background-position: center;
height: 100vh;
display: flex;
flex-direction: column;
padding: 20rem;
padding-bottom: 50rem;
justify-content: center;
p,h3,a,h1 {
  color: white;
}
h1,h3 {
  font-weight: 600;
}
h1 {
  font-size: ${theme.fontSizes.lg};
  padding: 5rem 0 ;
}
>.footer_container {
  display: flex;
  div:nth-child(1) {
    width: 70%;
    display: flex;
    flex-direction: column;
    p,a {
      margin: .5rem 0;
    }
  }
  div:nth-child(2) {
    padding: 3rem 0;
  }
}
a,p,h3 {
  font-size: ${theme.fontSizes.base};
}
`
