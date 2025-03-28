import { composeStyles, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, flexBox, position, size, transition } from '@/app/styles/utils.css';

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
