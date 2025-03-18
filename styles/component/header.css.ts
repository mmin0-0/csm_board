import { style } from '@vanilla-extract/css';
import { media, vars } from '@/styles/globals.css';
import { blank, border, flexBox, position, radius, spacing, transition } from '../utils.css';

export const HeaderWrap = style({
  color: vars.colors.black
});
export const HeaderInner = style([
  {color: vars.colors.error},
  flexBox({
    direction: 'row',
    justify: 'space-between',
    align: 'center'
  }),
  {
    '@media': {
      [media.lg]: {
        background: vars.colors.gray01,
      },
    }
  }
]);

export const box = style([
  radius('50%'),
  border({
    width: '1px',
    color: vars.colors.black
  }),
  transition('all'),
  spacing.my(2, 4),
  blank.pl(2),
  {
    width: '2rem',
    height: '2rem',
    background: vars.colors.error
  }
]);