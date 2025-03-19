import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';
import { size } from '@/styles/utils.css';

// 공동 컴포넌트트
export const Wrapper = style([
  size({width: '100dvw'}),
  // {display: 'flex'}
]);
export const Container = style({});

// 이미지지
export const ImageWrap = style({});
globalStyle(`${ImageWrap} img`, {maxWidth: '100%'});