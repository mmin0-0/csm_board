import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/globals.css';
import { blank, flexBox, size } from '@/styles/utils.css';

export const HeaderWrap = style([
  size({width: '100%', height: '6rem'}),
  blank.px(2,2),
  {
    zIndex: 9,
    background: vars.colors.white
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
  flexBox({
    direction: 'row',
    align: 'center',
    gap: '1rem'
  })
]);