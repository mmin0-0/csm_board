import { globalStyle, style } from '@vanilla-extract/css';
import { blank, border, size, spacing, transition } from '@/app/styles/utils.css';
import { vars } from '@/app/styles/globals.css';

// 공동 컴포넌트
export const Wrapper = style([
  size({width: '100dvw', height: '100dvh'}),
]);
export const Container = style([
  blank.p('2rem'),
  size({height: 'calc(100% - 6rem)'}),
  {
    background: vars.colors.gray02
  }
]);
globalStyle(`${Container} main`, {
  height: 'calc(100% - 4rem)',
  background: vars.colors.white,
  boxShadow: vars.colors.shadow,
  overflowY: 'auto',
  padding: '2rem'
});
export const TitleWrap = style([
  spacing.mb(2),
]);
export const ContWrap = style([]);

// 이미지
export const ImageWrap = style({});
globalStyle(`${ImageWrap} img`, {maxWidth: '100%'});

// table
export const TableWrap = style({});
globalStyle(`${TableWrap} table`, {
  // tableLayout: 'fixed',
  width: '100%',
  textAlign: 'center',
});
globalStyle(`${TableWrap} thead > tr:first-child`, {
  borderTop: `2px solid ${vars.colors.mainColor}`
});
export const Tr = style([
  transition('background'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.light,
    direction: 'top'
  }),
  {
    cursor: 'pointer',
    selectors: {
      '&:hover': {background: `rgba(${vars.colors.mainRGB}, .25)`}
    }
  }
]);
globalStyle(`table ${Tr}:last-child`, {borderBottom: `1px solid ${vars.colors.light}`});
export const Th = style([blank.p('.8rem .8rem')]);
export const Td = style([blank.p('.8rem .8rem')]);

// text align
export const TextAlignLeft = style({textAlign: 'left'});
export const TextAlignCenter = style({textAlign: 'center'});
export const TextAlignRight = style({textAlign: 'right'});