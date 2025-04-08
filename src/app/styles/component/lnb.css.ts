import "@vanilla-extract/css/disableRuntimeStyles";
import { composeStyles, globalStyle, style } from '@vanilla-extract/css';
import { media, vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, transition } from '@/app/styles/utils.css';

export const LnbWrap = style([
  position('relative'),
  {zIndex: 10}
]);
export const LnbControls = style([
  position('absolute', {top: '2rem', left: '2rem'}),
  {
    zIndex: 10,
    display: 'none',
    '@media': {
      [media.lg]: {display: 'block'}
    }
  }
]);
export const NavWrap = style([
  size({width: '20rem', height: '100%'}),
  blank.p('2.4rem 2rem'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray,
    direction: 'right'
  }),
  transition('left'),
  {
    background: vars.colors.black,
    '@media': {
      [media.lg]: {
        position: 'absolute',
        top: 0,
        left: '-20rem',
        padding: '6.4rem 1rem',
        boxShadow: vars.colors.shadow
      }
    }
  }
]);
globalStyle(`${LnbWrap}.on ${NavWrap}`, {
  left: 0
});
export const NavInner = style([
  flexBox({
    direction: 'column',
    align: 'flex-start',
    gap: '1rem'
  })
]);

export const Menu = style([
  size({width: '100%'}),
  position('relative'),
  blank.p('1.6rem'),
  transition('color'),
  radius('2rem'),
  flexBox({
    direction: 'row',
    justify: 'flex-start',
    align: 'center',
    gap: '1rem'
  }),
  {
    fontSize: vars.fontSize.medium,
    fontWeight: vars.fontWeight.semiBold,
    color: vars.colors.white,
    textTransform: 'capitalize',
    selectors: {
      '&:hover, &:active': {
        background: vars.colors.pink,
        color: vars.colors.black,
      }
    }
  }
]);
const ActiveMenuStyle = style({
  background: vars.colors.pink,
  color: vars.colors.black,
});
globalStyle(`${Menu}:hover > svg, ${Menu}:active > svg, ${ActiveMenuStyle} > svg`, {color: vars.colors.black});

export const ActiveMenu = composeStyles(Menu, ActiveMenuStyle);