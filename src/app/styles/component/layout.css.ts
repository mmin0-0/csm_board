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
export const BackButtonStyle = style({
  width: '3rem !important',
  height: '3rem !important',
  borderRadius: '50% !important',
  padding: '0 !important'
});
globalStyle(`${Container} main`, {
  // overflowY: 'auto',
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
export const ContHead = style([spacing.mb('2.6rem')]);

export const SwiperComponent = style({});
globalStyle(`${SwiperComponent} .swiper-wrapper`, {
  display: 'flex',
  // flexDirection: 'row'
});

// 이미지
export const ImageWrap = style({});
globalStyle(`${ImageWrap} img`, {maxWidth: '100%'});

// table
export const TableWrap = style({
  border: `1px solid ${vars.colors.darkgray}`,
  borderRadius: '2rem',
  overflow: 'hidden'
});
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
export const Tr = style([
  transition('background'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray,
    direction: 'top'
  }),
  {
    cursor: 'pointer',
    position: 'relative',
    selectors: {
      '&:hover': {
        background: vars.colors.yellow,
        color: vars.colors.black
      }
    }
  }
]);
export const Th = style([
  blank.p('1.2rem .8rem'),
  {textTransform: 'capitalize'}
]);
export const Td = style([blank.p('2rem .8rem')]);

// text align
export const TextAlignLeft = style({textAlign: 'left'});
export const TextAlignCenter = style({textAlign: 'center'});
export const TextAlignRight = style({textAlign: 'right'});