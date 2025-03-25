import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { flexBox, position, spacing } from '@/app/styles/utils.css';

export const FormGroup = style([
  flexBox({
    direction: 'column',
    gap: '1.2rem'
  })
]);
export const formControls = style({marginTop: '2rem'});
globalStyle(`${formControls} > div`, {marginTop: '1rem'});

export const InputWrap = style([]);
export const InputGroup = style([position('relative')]);
export const Eye = style([
  position('absolute', {top: '50%', right: '1rem'}),
  {
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: vars.colors.gray01
  }
]);
globalStyle(`${InputWrap} textarea, ${InputWrap} input[type="text"], ${InputWrap} input[type="file"], ${InputWrap} input[type="password"]`, {
  width: '100%',
  border: `1px solid ${vars.colors.gray01}`,
});
globalStyle(`${InputWrap} textarea::placeholder, ${InputWrap} input[type="text"]::placeholder, ${InputWrap} input[type="file"]::placeholder, ${InputWrap} input[type="password"]::placeholder`, {color: vars.colors.gray01});

globalStyle(`${InputWrap} input[type="text"], ${InputWrap} input[type="file"], ${InputWrap} input[type="password"]`, {
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