import { globalStyle, style } from '@vanilla-extract/css';
import { blank, size } from '@/styles/utils.css';
import { vars } from '../globals.css';

// 공동 컴포넌트트
export const Wrapper = style([
  size({width: '100dvw', height: '100dvh'}),
]);
export const Container = style([
  blank.p('2rem'),
  size({height: 'calc(100% - 6rem)'}),
  {
    background: vars.colors.gray02
  }
]);
globalStyle(`${Container} main`, {
  height: 'calc(100% - 4rem)',
  background: vars.colors.white,
  boxShadow: vars.colors.shadow,
  overflowY: 'auto',
  padding: '2rem'
});

// 이미지
export const ImageWrap = style({});
globalStyle(`${ImageWrap} img`, {maxWidth: '100%'});