import "@vanilla-extract/css/disableRuntimeStyles";
import { style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, flexBox, position, size } from '@/app/styles/utils.css';

export const HeaderWrap = style([
  size({width: '100%'}),
  blank.p('2rem 1.6rem'),
  position('sticky', {top: '0', left: '0'}),
  {
    zIndex: 10,
    background: vars.colors.black
  }
]);

export const HeaderTitle = style([
  flexBox({
    direction: 'row',
    align: 'center',
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