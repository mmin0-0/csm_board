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
globalStyle(`${InputWrap} *`, {color: vars.colors.black});
globalStyle(`${InputWrap} textarea, ${InputWrap} input`, {
  width: '100%',
  borderRadius: '1.2rem',
  border: `1px solid ${vars.colors.gray01}`,
});
globalStyle(`${InputWrap} textarea:focus, ${InputWrap} input:focus`, {borderColor: vars.colors.pink});
globalStyle(`${InputWrap} textarea:disabled, ${InputWrap} input:disabled`, {
  background: vars.colors.light,
  color: vars.colors.gray01,
});
globalStyle(`${InputWrap} input`, {padding: '.8rem 1rem'});
globalStyle(`${InputWrap} textarea`, {
  padding: '1rem',
  minHeight: '8rem',
  lineHeight: vars.txtHeight.regular,
});

// date custom
globalStyle(`input[type="date"]`, {
  position: 'relative',
  background: 'url(/images/icon/calendar_icon.png) no-repeat center left 1rem / 2rem',
  padding: '.8rem 1rem .8rem 3.4rem',
});
globalStyle(`
  input[type="date"]::-webkit-datetime-edit-text,
  input[type="date"]::-webkit-datetime-edit-month-field,
  input[type="date"]::-webkit-datetime-edit-day-field,
  input[type="date"]::-webkit-datetime-edit-year-field,`
  , {
    WebkitAppearance: 'none',
    display: 'none',
    color: 'transparent',
    textShadow: '0 0 0 transparent'
  });
globalStyle(`input[type="date"]::before`, {
  content: 'attr(data-placeholder)',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  color: vars.colors.black,
});
globalStyle(`input[type="date"]:focus::before, input[type="date"]:valid::before`, {display: 'none'});
globalStyle(`
  input[type="date"]::-webkit-clear-button,
  input[type="date"]::-webkit-inner-spin-button`, {display: 'none'});

globalStyle(`input[type="date"]::-webkit-calendar-picker-indicator`, {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'transparent',
  color: 'transparent',
});

export const InputLabel = style([
  spacing.mb(.6),
  {
    textTransform: 'capitalize',
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