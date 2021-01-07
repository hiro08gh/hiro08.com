import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html,
  body {
    background-color: #FFF;
    color: #333;
    font-size: 16px;
    font-kerning: normal;
    font-family: Hiragino Kaku Gothic ProN, ヒラギノ角ゴシック,
    ヒラギノ角ゴ Pro W3, Helvetica, Arial, メイリオ, Meiryo, ＭＳ Ｐゴシック,
    sans-serif;
    line-height: 1.5;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style: none;
  }
  figure {
    margin: 0;
  }
`;
