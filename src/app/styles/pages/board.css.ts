import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, position, radius, size, spacing } from '@/app/styles/utils.css';

export const BoardCont = style([
  blank.p('1rem'),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.light
  }),
  {
    borderTop: 0,
    minHeight: '10rem',
  }
]);
export const BoardTable = style([]);
globalStyle(`${BoardTable} th > div`, {background: `rgba(${vars.colors.mainRGB}, .25)`});
globalStyle(`${BoardTable} tbody tr`, {borderBottom: `1px solid ${vars.colors.light}`});
globalStyle(`${BoardTable} tbody tr:first-child`, {borderTop: `1px solid ${vars.colors.light}`});
globalStyle(`${BoardTable} tbody th, ${BoardTable} tbody td`, {borderRight: `1px solid ${vars.colors.light}`});
globalStyle(`${BoardTable} tbody td > div`, {textAlign: 'left'});

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
  {background: vars.colors.mainColor,}
]);
export const CommentForm = style([
  spacing.mt(1),
  position('relative'),
  {display: 'flex'}
]);
globalStyle(`${CommentForm} > div`, {flex: 1});
globalStyle(`${CommentForm} textarea`, {display: 'block'});
globalStyle(`${CommentForm} button`, {borderRadius: 0});
export const CommentList = style([spacing.mt(1)]);
export const CommentItem = style([
  blank.py(1.6, 1.6),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.light,
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
export const CommentCont = style([spacing.mt(2)]);