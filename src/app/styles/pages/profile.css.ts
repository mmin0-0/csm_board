import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, spacing } from '@/app/styles/utils.css';

export const ContWrap = style([
  spacing.mt(1),
  position('relative')
]);
export const ProfileContWrap = style({
  display: 'flex',
  gap: '2rem'
});
export const MainContent = style([
  size({width: 'calc(70% - 1rem)', height: 'calc(100vh - 4rem)'}),
]);
export const UserInfo = style([
  position('relative'),
  radius('1.2rem'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray
  }),
  flexBox({
    direction: 'row',
    align: 'center',
    gap: '2rem'
  })
]);
export const UserImg = style([
  size({width: '9rem', height: '9rem'}),
  radius('1.2rem'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.light
  }),
  {overflow: 'hidden'}
]);
export const InfoModifyBtn = style([position('absolute', {top: '1rem', right: '1rem'})]);
export const UserDetails = style({
  marginTop: '2rem',
  display: 'flex',
  gap: '2rem'
});
globalStyle(`${UserDetails} > div`, {flex: 1});
export const ProfileContent = style([
  blank.p('1.6rem'),
  radius('2.4rem'),
  {color: vars.colors.black}
]);
export const UserWritePosts = style({background: vars.colors.green});
export const ContentItem = style([
  blank.p('1rem'),
  radius('1rem'),
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between',
    gap: '1rem'
  }),
  border({
    width: '2px',
    type: 'solid',
    color: vars.colors.black
  }),
  {
    background: vars.colors.white,
    cursor: 'pointer',
    selectors: {
      '&:not(:first-child)': {marginTop: '1rem'}
    }
  }
]);
export const UserSchedule = style({background: vars.colors.blue});
export const SubContent = style({});