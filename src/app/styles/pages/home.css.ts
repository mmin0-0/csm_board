import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, spacing, transition } from '@/app/styles/utils.css';

// 공통 컴포넌트(주요 콘텐츠)
export const HomeContWrap = style({
  display: 'flex',
  gap: '2rem'
});
export const MainContent = style([
  size({width: 'calc(75% - 1rem)'})
]);
export const SubContent = style([
  size({width: 'calc(25% - 1rem)'}),
  radius('2rem'),
  blank.p('2.4rem 3rem'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray
  }),
]);
export const HomeContent = style([
  blank.p('2rem 3rem'),
  radius('2.4rem'),
  {color: vars.colors.black}
]);
export const ContTitWrap = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between'
  })
]);
export const ContWrap = style([
  spacing.mt(1),
  position('relative')
]);
export const ContWrapBottom = style([spacing.mt(1)]);
export const ContWrapList = style({
  marginTop: '1.8rem',
  display: 'flex',
  gap: '2rem'
});
globalStyle(`${ContWrapList} > div:first-child`, {width: '55%'});
globalStyle(`${ContWrapList} > div:last-child`, {width: '45%'});
globalStyle(`${ContWrapList} > div > div:not(:first-child)`, {marginTop: '1.8rem'});
export const MoreLink = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.medium,
});

// 행사일정(swiper)
export const EventWrap = style([position('relative')]);
export const EventSwiper = style([
  // size({width: '90%'}),
  // spacing.mc,
  // {
  //   overflow: 'hidden',
  //   zIndex: 1,
  // }
]);
export const EventItem = style([
  blank.p('1rem'),
  radius('1.2rem'),
  {
    background: vars.colors.darkgray,
    width: '100% !important'
  }
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

// 게시판(Board list)
export const BoardWrap = style({background: vars.colors.yellow});
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
export const BoardContWrap = style([
  border({
    width: '2px',
    type: 'solid',
    color: vars.colors.black,
    direction: 'top'
  })
]);
export const BoardContEmpty = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'center'
  }),
  {minHeight: '10rem'}
]);
export const BoardItem = style([
  blank.p('.6rem .4rem'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray,
    direction: 'bottom'
  }),
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between',
    gap: '1rem'
  }),
  {background: vars.colors.white}
]);
globalStyle(`${BoardItem} p`, {
  overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
});
globalStyle(`${BoardItem} span`, {whiteSpace: 'nowrap'});

// 강의(Lecture)
export const LectureWrap = style({background: vars.colors.pink});
export const LectureList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem 1rem'
});
export const LectureItem = style([
  blank.p(1),
  radius('1.2rem'),
  transition('transform'),
  border({
    width: '2px',
    type: 'solid',
    color: vars.colors.black
  }),
  {
    display: 'block',
    background: vars.colors.white,
    boxShadow: vars.colors.shadow,
    selectors: {
      '&:hover': {transform: 'translateY(-8px)'}
    }
  }
]);
export const LectureImg = style({height: '14rem'});
globalStyle(`${LectureImg} img`, {
  height: '100%',
  width: '100%',
  objectFit: 'cover'
});
export const LectureInfo = style({marginTop: '1rem'});
globalStyle(`${LectureInfo} strong`, {
  textTransform: 'capitalize',
  display: 'block',
  marginBottom: '.6rem'
});

// 채용(Job Posting)
export const JobPostingWrap = style({background: vars.colors.blue});
export const PostingList = style({});
globalStyle(`${PostingList} > a`, {
  display: 'block',
  padding: '.6rem 0',
  borderBottom: `2px solid ${vars.colors.white}`
});
export const PostingInfo = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between',
    gap: '1rem'
  })
]);
export const PostingUsers = style({display: 'flex'});
export const UserInfo = style([
  size({width: '3rem', height: '3rem'}),
  radius('50%'),
  position('relative'),
  spacing.ml('-4px'),
  {overflow: 'hidden'}
]);
export const UserPath = style([
  position('absolute', {top: '0', left: '0'}),
  size({width: '100%', height: '100%'}),
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'center'
  }),
  {
    background: `rgba(${vars.colors.blackRGB}, .65)`,
    color: vars.colors.white
  }
]);

// 모임활동(Leads activity)
export const LeadsActivityWrap = style({background: vars.colors.green});

// 알림(Notifications)
export const NotificationsWrap = style({
  background: vars.colors.white,
  marginTop: '1.8rem'
});
globalStyle(`${NotificationsWrap} > a`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

// 일정 캘린더(calender custom)
