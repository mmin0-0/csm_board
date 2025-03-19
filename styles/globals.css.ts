import { createGlobalTheme, globalFontFace, globalStyle } from "@vanilla-extract/css";
import './layers.css';
import './reset.css';

export const vars = createGlobalTheme(':root', {
  colors: {
    black: '#111111',
    white: '#ffffff',
    light: '#f2f2f2',
    gray01: '#999999',
    gray02: '#f4f8fd',
    mainColor: '#369fff',
    mainActive: '#006ed3',
    mainFilter: 'invert(52%) sepia(46%) saturate(1966%) hue-rotate(186deg) brightness(100%) contrast(103%)',
    shadow: 'rgba(200,200,200, 0.4) 0px 3px 20px 0px',
    orange: '#ff993a',
    orangeRGB: '255,153,58',
    green: '#8ac53e',
    greenRGB: '138,197,62',
    yellow: '#ffd143',
    yellowRGB: '255,209,67',
    blueRGB: '54,159,255' , 
    error: '#FE4545',
  },
  fontSize: {
    small: '1.4rem',
    regular: '1.6rem',
    medium: '1.8rem',
    large: '2rem',
    xlarge: '2.4rem'
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semiBold: '600',
    bold: '700'
  },
  fontColor: {
    primary:'#111111',
    secondary: '#369fff',
    white: '#ffffff',
    error: '#bd2c3d',
  },
  txtHeight: {
    normal: '1',
    regular: '1.2',
    medium: '1.4',
    large: '1.6'
  }
});

export const media = {
  xs: 'screen and (max-width: 420px)',
  sm: 'screen and (max-width: 768px)',
  lg: 'screen and (max-width: 1200px)'
};

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle('html',{
  fontSize: '10px'
});

globalStyle("body", {
  fontFamily: 'Pretendard',
  fontSize: vars.fontSize.regular,
  fontWeight: vars.fontWeight.normal,
  lineHeight: 1,
  letterSpacing: '-0.02em'
});

globalFontFace('Pretendard', {
  src: 'url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff")',
  fontWeight: '400',
  fontStyle: 'normal'
});
