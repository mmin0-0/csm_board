import { globalStyle, style } from '@vanilla-extract/css';
import { vars, media } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, spacing, transition } from '@/app/styles/utils.css';

// 공통 컴포넌트(주요 콘텐츠)
export const HomeContWrap = style({
  display: 'flex',
  gap: '2rem',
  '@media': {
    [media.sm]: {
      flexDirection: 'column'
    }
  }
});
export const MainContent = style([
  size({width: 'calc(70% - 1rem)'}),
  {
    minHeight: 'calc(100vh - 4rem)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridTemplateRows: '4rem auto auto auto',
    gap: '1rem',
    '@media': {
      [media.sm]: {
        width: '100%',
        display: 'block'
      }
    }
  }
]);
globalStyle(`${MainContent} > div:not(:first-child)`, {
  '@media': {
    [media.sm]: {marginTop: '2rem'}
  }
});
export const Header = style({
  gridColumn: '1 / 5',
  gridRow: '1 / 2'
});
export const SubContent = style([
  size({width: 'calc(30% - 1rem)'}),
  {
    '@media': {
      [media.sm]: {
        width: '100%'
      }
    }
  }
]);
export const HomeContent = style([
  blank.p('1.6rem'),
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
  fontWeight: vars.fontWeight.semiBold,
});

// 게시판(Board list)
export const BoardWrap = style({
  background: vars.colors.yellow,
  gridColumn: '1 / 4',
  gridRow: '2 / 3'
});
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
export const LectureWrap = style({
  background: vars.colors.pink,
  gridColumn: '1 / 3',
  gridRow: '3 / 5'
});
export const LectureList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
  gap: '1rem',
  '@media': {
    [media.xs]: {gridTemplateColumns: '1fr'}
  }
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
globalStyle(`${LectureItem} img`, {
  '@media': {
    [media.xs]: {width: '100%'}
  }
});
export const LectureInfo = style({marginTop: '1rem'});
globalStyle(`${LectureInfo} strong`, {
  textTransform: 'capitalize',
  display: 'block',
  marginBottom: '.6rem'
});

// 채용(Job Posting)
export const JobPostingWrap = style({
  background: vars.colors.blue,
  gridColumn: '3 / 5',
  gridRow: '3 / 4'
});
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
globalStyle(`${UserInfo} img`, {width: '100%'});
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
export const LeadsActivityWrap = style({
  background: vars.colors.green,
  gridColumn: '4 / 5',
  gridRow: '2 / 3'
});
globalStyle(`${LeadsActivityWrap} > canvas`, {
  '@media': {
    [media.xs]: {width: '100%'}
  }
});

// 알림(Notifications)
export const NotificationsWrap = style({
  background: vars.colors.white,
  gridColumn: '3 / 5',
  gridRow: '4 / 5'
});
globalStyle(`${NotificationsWrap} > a`, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});