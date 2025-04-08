import "@vanilla-extract/css/disableRuntimeStyles";
import { style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { flexBox, size } from '@/app/styles/utils.css';

export const HeaderWrap = style([
  size({width: '100%'}),
  {
    zIndex: 9,
    background: vars.colors.black
  }
]);

export const HeaderTitle = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between',
    gap: '1rem'
  })
]);

export const HeaderInfo = style([
  flexBox({
    direction: 'row',
    align: 'center',
    gap: '1rem'
  })
]);