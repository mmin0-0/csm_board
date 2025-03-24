import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { flexBox, spacing } from '@/app/styles/utils.css';

export const FormGroup = style([
  flexBox({
    direction: 'column',
    gap: '1.2rem'
  })
]);

export const InputWrap = style([]);
globalStyle(`${InputWrap} textarea, ${InputWrap} input[type="text"], ${InputWrap} input[type="file"]`, {
  width: '100%',
  border: `1px solid ${vars.colors.gray01}`,
});
globalStyle(`${InputWrap} textarea::placeholder, ${InputWrap} input[type="text"]::placeholder, ${InputWrap} input[type="file"]::placeholder`, {color: vars.colors.gray01});

globalStyle(`${InputWrap} input[type="text"], ${InputWrap} input[type="file"]`, {
  padding: '.8rem 1rem'
});
globalStyle(`${InputWrap} textarea`, {
  padding: '1rem',
  minHeight: '8rem',
  lineHeight: vars.txtHeight.regular,
});

export const InputLabel = style([
  spacing.mb(.6),
  {
    display: 'block',
    fontWeight: vars.fontWeight.semiBold,
  }
]);
export const Essential = style({
  selectors: {
    '&::before': {
      content: '*',
      color: vars.fontColor.error,
      marginRight: '.4rem'
    }
  }
})