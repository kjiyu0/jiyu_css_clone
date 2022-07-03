import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize};
  /* 
    브라우저의 기본 폰트 크기 = 16px
    16 * 62.5% = 10px 로 지정이 가능하다.
    - 10px로 고정하지 않은 이유
      :브라우저에서 제공하는 사용자 접근성 옵션(accessibility options)에 있다.
        브라우저의 기본 폰트를 바꾸면 그에 따른 폰트 크기로 변경이 되어야하는데 
        고정 10px 로 적용되어 있을 경우에는 접근성 옵션이 적용되지 않는다
  */
  html{ font-size: 62.5%; };
  #root{
    position: relative;
  }

html, body, div, span, applet, object,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%;
    font-family: "AppleSDNeo";
    font-weight: 400;
    color: ${(props) => props.theme.colors.black_text};
    -webkit-touch-callout:none;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }


  //outline설정해서 클릭시 뜨는 파란색 제거
  input:focus{
	outline:none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

  a{
    text-decoration: none; outline: none;
  
  }
  select{
    /* 디폴트 스타일 제거 */
    -moz-appearance: none; /* chrome */
    -webkit-appearance: none; /* firefox */
    appearance: none;
    background-color: #fff ;
    padding: 8px 10px;
    width: 185px;
    border-radius: 3px;
    transition: 0.2s;
  }
  select:hover{
    background-color: #fff ;
  }
  select:active{
    background-color: #fff ;
  }
  select::-ms-expand{
   display:none;/*for IE10,11*/
  }
  button {
    cursor: pointer;
    background: inherit;
    border: none;
    padding: 0;
    margin: 0;
    transition: 0.2s;
    font-family: "AppleSDNeo";
    font-weight: 400;
    font-size: 1.4rem;
  }
  label{
        color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
  }
  input, textarea{
    border: none;
    padding: 8px 10px;
    border-radius: 3px;
    width: 100%;
    &::placeholder{
    }
  }
  input:focus, textarea:focus, select:focus{
        outline: none;
    }
  ul{
    list-style: none;
  }
  img{
    width: inherit;
  }
 iframe{
   position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: none;
    z-index: -1;
 }

`;
export default GlobalStyle;
