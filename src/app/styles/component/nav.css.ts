import { composeStyles, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';
import { blank, flexBox, position, size, transition } from '@/styles/utils.css';

export const NavWrap = style([
  size({height: '4rem'}),
  {
    display: 'flex',
    border: '1px solid #000'
  }
]);
export const NavMenu = style([
  flexBox({
    direction: 'row',
    align: 'center'
  }),
  {

  }
]);
export const Menu = style([
  position('relative'),
  blank.p('1rem 2rem'),
  transition('color'),
  flexBox({
    direction: 'row',
    justify: 'flex-start',
    align: 'center',
    gap: '1rem'
  }),
  {
    fontWeight: vars.fontWeight.semiBold,
    color: vars.colors.gray01,
    textTransform: 'capitalize',
    selectors: {
      '&:hover, &:active': {color: vars.colors.black}
    }
  }
]);
const ActiveMenuStyle = style({color: vars.colors.black});
globalStyle(`${Menu}:hover > svg, ${Menu}:active > svg, ${ActiveMenuStyle} > svg`, {color: vars.colors.mainColor});

export const ActiveMenu = composeStyles(Menu, ActiveMenuStyle);