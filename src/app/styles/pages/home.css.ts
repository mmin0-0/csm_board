import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, spacing } from '@/app/styles/utils.css';

// 공통 컴포넌트(주요 콘텐츠)
export const HomeContent = style([
  blank.p('2rem 3rem'),
  radius('2.4rem'),
  {color: vars.colors.black}
]);

// 행사일정
export const EventWrap = style([position('relative')]);
export const EventSwiper = style([
  size({width: '90%'}),
  spacing.mc,
  {
    overflow: 'hidden',
    zIndex: 1,
  }
]);
export const EventItem = style([
  blank.p('1rem'),
  radius('1.2rem'),
  {background: vars.colors.darkgray}
]);

export const EventListControls = style([
  position('absolute', {top: '50%', left: '0'}),
  size({width: '100%'}),
  flexBox({
    direction: 'row',
    justify: 'space-between'
  }),
  {transform: 'translateY(-50%)'}
]);

// 게시판 테이블
export const BoardList = style({
  background: vars.colors.yellow
});
export const BoardListTabs = style([
  blank.pb(1),
  border({
    width: '2px',
    type: 'solid',
    color: vars.colors.black,
    direction: 'bottom'
  })
]);
export const BoardTab = style([
  {
    textTransform: 'capitalize',
    position: 'relative',
    padding: '0 1rem',
    selectors: {
      "&:first-child": {paddingLeft: 0},
      "&:not(:first-child):before": {
        content: '',
        width: '1px',
        height: '80%',
        background: vars.colors.black,
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)'
      },
    },
  }
]);
globalStyle(`${BoardTab}.on`, {fontWeight: vars.fontWeight.bold});
export const BoardContEmpty = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'center'
  }),
  {minHeight: '10rem'}
]);
export const BoardItem = style([
  blank.p('.6rem .2rem'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray,
    direction: 'bottom'
  }),
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between'
  }),
]);