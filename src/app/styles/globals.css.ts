import { createGlobalTheme, globalFontFace, globalStyle, style } from "@vanilla-extract/css";
import '@/app/styles/layers.css';
import '@/app/styles/reset.css';

export const vars = createGlobalTheme(':root', {
  colors: {
    black: '#111111',
    darkgray: '#212121',
    white: '#ffffff',
    light: '#F5F5F5',
    gray01: '#908E8F',
    gray02: '#373737',
    pink: '#EB6BA8',
    green: '#1CE15F',
    blue: '#4791FF',
    yellow: '#ECE42E',
    yellowRGB: '236, 228, 46',
    red: '#F20000',
    mainRGB: '235, 107, 168' , 
    mainFilter: 'invert(58%) sepia(63%) saturate(752%) hue-rotate(294deg) brightness(96%) contrast(93%)',
    shadow: 'rgba(200,200,200, 0.4) 0px 3px 20px 0px',
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
    primary:'#ffffff',
    secondary: '#F5F5F5',
    black: '#111111',
    gray: '#908E8F',
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
  color: vars.colors.white,
  lineHeight: 1,
  letterSpacing: '-0.02em'
});

globalFontFace('Pretendard', {
  src: 'url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff") format("woff")',
  fontWeight: '400',
  fontStyle: 'normal'
});

export const hide = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  border: 0,
  margin: '-1px',
  overflow: 'hidden',
  clipPath: 'polygon(0 0, 0 0, 0 0)'
});
