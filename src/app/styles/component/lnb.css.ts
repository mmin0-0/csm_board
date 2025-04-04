import "@vanilla-extract/css/disableRuntimeStyles";
import { composeStyles, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, transition } from '@/app/styles/utils.css';

export const LnbWrap = style([
  size({width: '20rem', height: '100%'}),
  blank.p('2.4rem 2rem'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray,
    direction: 'right'
  }),
  {
    zIndex: 10,
    background: vars.colors.black
  }
]);

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