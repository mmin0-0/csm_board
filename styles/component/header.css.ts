import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/globals.css';
import { blank, flexBox, position, size } from '@/styles/utils.css';

export const HeaderWrap = style([
  size({width: '100%', height: '6rem'}),
  blank.px(2,2),
  position('absolute', {top: '0'}),
  {
    zIndex: 9,
    background: vars.colors.gray02
  }
]);

export const HeaderInner = style([
  size({height: '100%'}),
  flexBox({
    direction: 'row',
    justify: 'space-between',
    align: 'center'
  })
]);

export const HeaderInfo = style([

]);