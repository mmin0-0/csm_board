import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';
import { blank, flexBox, position, size } from '@/styles/utils.css';

export const HeaderWrap = style([
  size({width: '100%', height: '6rem'}),
  blank.px(2,2),
  position('sticky', {top: '0'}),
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