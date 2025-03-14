import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    black: '#000000',
    white: '#ffffff',
    gray: '#999999',
    gray02: '#f2f2f2',
    gray03: '#f4f8fd',
    orange: '#ff993a',
    red: '#FE4545',
    green: '#8ac53e',
    yellow: '#ffd143',
    transparent: 'transparent', 
    mainColor: '#369fff',
    mainHover: '#006ed3',
    mainFilter: 'invert(52%) sepia(46%) saturate(1966%) hue-rotate(186deg) brightness(100%) contrast(103%)',
    mainShadow: 'rgba(200,200,200, 0.4) 0px 3px 20px 0px',
    orangeRGB: '255,153,58',
    greenRGB: '138,197,62',
    yellowRGB: '255,209,67',
    blueRGB: '54,159,255'   
  },
  font: {
    body: 'arial'
  }
});