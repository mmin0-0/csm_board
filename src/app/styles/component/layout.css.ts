import { globalStyle, style, keyframes } from '@vanilla-extract/css';
import { blank, border, flexBox, radius, size, spacing, transition } from '@/app/styles/utils.css';
import { media, vars } from '@/app/styles/globals.css';

// 공동 컴포넌트
export const Wrapper = style([
  size({width: '100dvw', height: '100dvh'}),
  {
    display: 'flex',
    background: vars.colors.black,
    overflowX: 'hidden',
  }
]);
export const Container = style([
  size({height: '100%'}),
  {
    flex: 1,
    '@media': {
      [media.sm]: {
        width: '100%',
        flex: 'none'
      }
    }
  }
]);
export const TitleWrap = style([
  spacing.mb(2),
  flexBox({
    direction: 'row',
    justify: 'space-between',
    align: 'center',
    gap: '1rem'
  }),
  {
    minHeight: '4rem',
    '@media': {
      [media.lg]: {paddingLeft: '4rem'},
      [media.xs]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
      }
    }
  }
]);
export const PageContainer = style([blank.p('2rem')]);
export const ContWrap = style([]);
export const ContHead = style({
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  '@media': {
    [media.lg]: {paddingLeft: '4rem'}
  }
});

// button
export const BackButtonStyle = style({
  width: '3rem !important',
  height: '3rem !important',
  borderRadius: '50% !important',
  padding: '0 !important',
  background: vars.colors.light,
});

// swiper
export const SwiperComponent = style({overflow: 'hidden'});
globalStyle(`${SwiperComponent} .swiper-wrapper`, {display: '-webkit-inline-box'});
globalStyle(`.swiper-pagination`, {
  display: 'flex',
  gap: '.4rem'
});
globalStyle(`.swiper-pagination-bullet`, {
  width: '1rem',
  height: '1rem',
  borderRadius: '50%',
  background: vars.colors.gray01
});
globalStyle(`.swiper-pagination-bullet-active`, {background: vars.colors.pink});

// 이미지
export const ImageWrap = style({});
globalStyle(`${ImageWrap} img`, {maxWidth: '100%'});

// table
export const TableWrap = style({
  border: `1px solid ${vars.colors.darkgray}`,
  borderRadius: '2rem',
  overflow: 'auto',
  width: '100%'
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
  width: '100%',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  borderCollapse: 'collapse'
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
      '&:hover': {background: `rgba(${vars.colors.pinkRGB}, .35)`}
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

// loading
const LoadingAni = keyframes({
  '0%': {transform: 'translate(0, 0)'},
  '50%': {transform: 'translate(0, 15px)'},
  '100%': {transform: 'translate(0, 0)'},
});
export const LoadingWrap = style({
  '@media': {
    [media.lg]: {paddingLeft: '4rem'}
  }
});
export const LoadingLines = style([
  spacing.mt(1),
  flexBox({
    direction: 'row',
    align: 'center',
    gap: '1rem'
  }),
]);
export const LoadingLine = style([
  size({width: '1.2rem', height: '1.2rem'}),
  radius('50%'),
  {
    background: vars.colors.pink,
    animation: `${LoadingAni} .6s linear infinite`,
    selectors: {
      '&:first-child': {animationDelay: '.1s'},
      '&:nth-child(2)': {animationDelay: '.2s'},
      '&:last-child': {animationDelay: '.3s'},
    }
  }
]);

// not-found page
export const EmptyWrap = style({});
export const EmptyImgWrap = style([
  size({width: '18rem'})
]);
export const EmptyInfo = style({});
globalStyle(`${EmptyInfo} > p`, {marginTop: '1rem'});
globalStyle(`${EmptyInfo} > a`, {
  display: 'block',
  marginTop: '1rem',
  color: vars.colors.pink,
  textDecoration: 'underline'
});

export const TabelTest = style({
  display: 'block',
  overflowX: 'auto',
  overflowY: 'hidden',
  width: '100%'
});
globalStyle(`${TabelTest} table`, {
  minWidth: '800px',
  whiteSpace: 'nowrap',
  borderCollapse: 'collapse',
  border: '1px solid white'
});