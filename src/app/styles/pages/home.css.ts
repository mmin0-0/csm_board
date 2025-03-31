import { style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, flexBox, position, radius, size, spacing } from '@/app/styles/utils.css';

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
  {
    background: vars.colors.darkgray
  }
]);

export const EventListControls = style([
  position('absolute', {top: '50%', left: '0'}),
  size({width: '100%'}),
  flexBox({
    direction: 'row',
    justify: 'space-between'
  }),
  {
    transform: 'translateY(-50%)'
  }
]);