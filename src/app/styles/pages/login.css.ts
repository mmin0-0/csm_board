import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, flexBox, size, spacing } from '../utils.css';

export const LoginWrap = style([
  size({height: '100dvh'}),
  {display: 'flex'}
]);
export const LoginBackground = style([
  size({width: '60%'}),
]);
export const LoginContainer = style([
  size({width: '60%'}),
  blank.p('2rem'),
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'center'
  }),
  {background: vars.colors.pink,}
]);
export const LoginContInfo = style([size({width: '80%'})]);
export const LoginContTit = style([
  spacing.mb('5rem'),
  {textAlign: 'center'}
]);
export const Boundary = style([
  spacing.my(2, 2),
  {textAlign: 'center'}
]);
export const RegisterLink = style({
  color: vars.colors.black,
  marginTop: '2rem',
  display: 'block',
  textAlign: 'center',
  lineHeight: '1.2'
});
globalStyle(`${RegisterLink} b`, {textDecoration: 'underline'});