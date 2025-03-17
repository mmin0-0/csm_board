import { createGlobalTheme, globalFontFace, globalStyle } from "@vanilla-extract/css";
import './layers.css';
import './reset.css';

export const vars = createGlobalTheme(':root', {
  colors: {
    black: '#111111',
    white: '#ffffff'
  }
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle('html',{
  fontSize: '10px'
});

globalStyle("body", {
  fontFamily: 'Pretendard',
  fontSize: '1.6rem',
  lineHeight: 1,
  letterSpacing: '-0.02em'
});

globalFontFace('Pretendard', {
  src: 'url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff")',
  fontWeight: '400',
  fontStyle: 'normal'
});