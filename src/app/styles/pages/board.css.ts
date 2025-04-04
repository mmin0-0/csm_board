import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, spacing } from '@/app/styles/utils.css';

export const BoardCont = style([
  blank.p('1rem'),
  spacing.mt(2),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray
  }),
  {minHeight: '10rem',}
]);
export const BoardTable = style({tableLayout: 'fixed'});
globalStyle(`${BoardTable} tbody tr:not(:last-child)`, {
  borderBottom: `1px solid ${vars.colors.darkgray}`,
});
globalStyle(`${BoardTable} tbody th, ${BoardTable} tbody td`, {
  width: '25%'
});
globalStyle(`${BoardTable} tbody td > div`, {textAlign: 'left'});
export const Th = style([
  blank.p('1rem .8rem'),
  {
    textTransform: 'capitalize',
    background: `rgba(${vars.colors.yellowRGB}, .45)`
  }
]);
export const Td = style([blank.p('1rem .8rem')]);

export const CommentWrap = style([spacing.mt(2)]);
export const CommentTit = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'flex-start',
    gap: '.6rem'
  })
]);
export const CommentNum = style([
  size({width: '2rem', height: '2rem'}),
  radius('50%'),
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'center'
  }),
  {background: vars.colors.pink}
]);
export const CommentForm = style([
  spacing.mt(1),
  position('relative'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.light
  }),
  {display: 'flex'}
]);
globalStyle(`${CommentForm} > div`, {flex: 1});
globalStyle(`${CommentForm} textarea`, {
  display: 'block',
  border: '0 !important',
  borderRadius: '1.2rem 0 0 1.2rem !important'
});
globalStyle(`${CommentForm} button`, {borderRadius: 0});
export const CommentList = style([spacing.mt(1)]);
export const CommentItem = style([
  blank.py(1.6, 1.6),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray,
    direction: 'bottom'
  })
]);
export const CommentUserInfo = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between'
  })
]);
export const AuthorEmail = style({marginLeft: '.6rem'});
export const CommentCont = style([spacing.mt(2)]);