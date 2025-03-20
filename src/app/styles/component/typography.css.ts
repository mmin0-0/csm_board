import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';

export const baseTxtStyle = style({wordBreak: 'keep-all'});

export const textSize = styleVariants(vars.fontSize, (fontSize) => ({fontSize}));

export const textWeight = styleVariants(vars.fontWeight, (fontWeight) => ({fontWeight}));

export const textColor = styleVariants(vars.fontColor, (color) => ({color}));

export const textLineHeight = styleVariants(vars.txtHeight, (lineHeight) => ({lineHeight}));