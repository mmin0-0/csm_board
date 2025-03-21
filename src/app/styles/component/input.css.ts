import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';

export const InputWrap = style([]);
globalStyle(`${InputWrap} textarea, ${InputWrap} input[type="text"]`, {width: '100%'});
globalStyle(`${InputWrap} textarea`, {
  border: `1px solid ${vars.colors.light}`,
  padding: '1rem',
  minHeight: '8rem',
  lineHeight: vars.txtHeight.regular,
});