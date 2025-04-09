import { globalStyle, style } from '@vanilla-extract/css';
import { media, vars } from '@/app/styles/globals.css';
import { blank, flexBox, position, size, spacing, backgroundProperty } from '@/app/styles/utils.css';
import { Eye } from '@/app/styles/component/input.css';

export const LoginWrap = style([
  size({height: '100dvh'}),
  position('relative'),
  {
    display: 'flex',
    '@media': {
      [media.xs]: {
        display: 'block'
      }
    }
  }
]);
globalStyle(`${LoginWrap} ${Eye}`, {color: vars.colors.black});
export const LoginBackground = style([
  size({width: '60%', height: '100%'}),
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
  {
    '@media': {
      [media.xs]: {
        width: '100%',
        selectors: {
          '&::before': {
            content: '',
            width: '100%',
            height: '100%',
            background: `rgba(${vars.colors.blackRGB}, .45)`,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }
        }
      }
    }
  }
]);
export const LoginTitle = style([
  size({width: 'calc(100% - 4rem)'}),
  position('absolute', {top: '10%'}),
  {fontSize: 'clamp(3.2rem, 4vw, 5rem) !important'}
]);
export const LoginContainer = style([
  size({width: '40%'}),
  blank.p('2rem'),
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'center'
  }),
  {
    background: vars.colors.pink,
    '@media': {
      [media.xs]: {
        width: 'calc(100% - 4rem)',
        maxHeight: 'calc(100% - 8rem),',
        maxWidth: '80rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 2
      }
    }
  }
]);
export const LoginContInfo = style([
  size({width: '80%'}),
  {
    '@media': {
      [media.xs]: {width: '90%'}
    }
  }
]);
export const LoginContTit = style([
  spacing.mb('5rem'),
  {textAlign: 'center'}
]);
export const Boundary = style([
  spacing.my(2, 2),
  {textAlign: 'center'}
]);
export const LoginButtonStyle = style([spacing.mt(2)]);
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
export const EmptyMessage = style([spacing.mt(1)]);
