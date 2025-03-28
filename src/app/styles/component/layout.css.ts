import { globalStyle, style } from '@vanilla-extract/css';
import { blank, border, flexBox, size, spacing, transition } from '@/app/styles/utils.css';
import { vars } from '@/app/styles/globals.css';

// 공동 컴포넌트
export const Wrapper = style([
  size({width: '100dvw'}),
  {
    display: 'flex',
    background: vars.colors.black,
    overflowX: 'hidden',
  }
]);
export const Container = style([
  size({width: 'calc(100% - 20rem)'}),
  spacing.ml(20),
  {
    minHeight: '100dvh',
  }
]);
globalStyle(`${Container} main`, {
  // height: 'calc(100% - 4rem)',
  overflowY: 'auto',
  padding: '2rem'
});
export const TitleWrap = style([
  spacing.mb(2),
  flexBox({
    direction: 'row',
    justify: 'space-between',
    align: 'center',
    gap: '1rem'
  })
]);
export const ContWrap = style([]);

// 이미지
export const ImageWrap = style({});
globalStyle(`${ImageWrap} img`, {maxWidth: '100%'});

// table
export const TableWrap = style({});
export const TableEmpty = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'center'
  }),
  {minHeight: '20rem'}
]);
globalStyle(`${TableWrap} table`, {
  // tableLayout: 'fixed',
  width: '100%',
  textAlign: 'center',
});
globalStyle(`${TableWrap} thead > tr:first-child`, {
  borderTop: `2px solid ${vars.colors.pink}`
});
export const Tr = style([
  transition('background'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.gray01,
    direction: 'top'
  }),
  {
    cursor: 'pointer',
    selectors: {
      '&:hover': {background: `rgba(${vars.colors.mainRGB}, .25)`}
    }
  }
]);
globalStyle(`table ${Tr}:last-child`, {borderBottom: `1px solid ${vars.colors.gray01}`});
export const Th = style([blank.p('.8rem .8rem')]);
export const Td = style([blank.p('.8rem .8rem')]);

// text align
export const TextAlignLeft = style({textAlign: 'left'});
export const TextAlignCenter = style({textAlign: 'center'});
export const TextAlignRight = style({textAlign: 'right'});