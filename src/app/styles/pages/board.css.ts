import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';

export const BoardWrap = style({});
export const BoardCont = style({});
export const BoardTable = style({});
globalStyle(`${BoardTable} th > div`, {
  background: `rgba(${vars.colors.mainRGB}, .25)`,
});

export const CommentWrap = style({});
export const CommentTit = style({});
export const CommentForm = style({});
export const CommentList = style({});
export const CommentUserInfo = style({});
export const CommentCont = style({});