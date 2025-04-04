import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, flexBox, position, size, spacing, backgroundProperty } from '@/app/styles/utils.css';

export const LoginWrap = style([
  size({height: '100dvh'}),
  {display: 'flex'}
]);
export const LoginBackground = style([
  size({width: '60%'}),
  position('relative'),
  blank.p('2rem'),
  backgroundProperty({
    folder: 'page/login',
    img: 'login_bg',
    type: 'png',
    repeat: 'no-repeat',
    size: 'auto 60%',
    x: 'left 25%',
    y: 'bottom 30%'
  }),
]);
export const LoginTitle = style([
  size({width: 'calc(100% - 4rem)'}),
  position('absolute', {top: '10%'}),
  {
  fontSize: 'clamp(3.2rem, 4vw, 5rem)',
  fontWeight: vars.fontWeight.semiBold,
  }
]
);
export const LoginContainer = style([
  size({width: '40%'}),
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
globalStyle(`${RegisterLink} b`, {
  textDecoration: 'underline',
  fontWeight: vars.fontWeight.semiBold
});