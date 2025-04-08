import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, spacing, transition } from '@/app/styles/utils.css';

export const ContWrap = style([
  spacing.mt(1),
  position('relative')
]);
export const ProfileContWrap = style({
  display: 'flex',
  gap: '2rem'
});
export const MainContent = style([
  size({width: 'calc(70% - 1rem)'}),
]);
export const UserInfoWrap = style([
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
export const ContactInfo = style([spacing.mt(1)]);
export const InfoModifyBtn = style([position('absolute', {top: '1rem', right: '1rem'})]);
export const UserDetails = style({
  marginTop: '2rem',
  minHeight: 'calc(100vh - 15.5rem)',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr 1fr',
  gap: '2rem'
});
globalStyle(`${UserDetails} > div`, {flex: 1});
export const ProfileContent = style([
  blank.p('1.6rem'),
  radius('2.4rem'),
  {color: vars.colors.black}
]);
export const UserWritePosts = style({
  background: vars.colors.green,
  gridColumn: '1 / 3',
  gridRow: '1 / 3'
});
export const ContentItem = style([
  blank.p('1rem'),
  radius('1rem'),
  border({
    width: '2px',
    type: 'solid',
    color: vars.colors.black
  }),
  transition('transform'),
  {
    display: 'block',
    background: vars.colors.white,
    cursor: 'pointer',
    selectors: {
      '&:not(:first-child)': {marginTop: '1rem'},
      '&:hover': {transform: 'translateY(-8px)'}
    }
  }
]);
export const ContentTxt = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between',
    gap: '1rem'
  }),
]);
export const UserSchedule = style({
  background: vars.colors.blue,
  gridColumn: '3 / 5',
  gridRow: '1 / 3'
});
export const RecommendContent = style({
  background: vars.colors.pink,
  gridColumn: '1 / 5',
  gridRow: '3 / 5'
});
export const RecommendList = style({
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(20rem, 1fr))'
});
globalStyle(`${RecommendList} > a`,{marginTop: '0 !important'});
export const EventPreview = style({
  height: '14rem',
  marginBottom: '2rem'
});
globalStyle(`${EventPreview} img`, {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
});
export const SubContent = style({});