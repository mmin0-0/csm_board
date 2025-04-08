import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { blank, border, flexBox, radius, size, spacing } from '@/app/styles/utils.css';

// react calendar custom css
export const CalendarWrap = style([
  radius('2rem'),
  blank.p('2rem'),
  size({height: '100%'}),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.darkgray
  }),
  {background: vars.colors.black}
]);
export const CalendarCont = style({});
export const CalendarInfo = style([spacing.mt(2)]);
export const TodoListWrap = style([spacing.mt(2)]);
export const TodoListInfo = style([spacing.mt(1)]);
export const TodoListInfoWrap = style([spacing.mt(1)]);
export const TodoListItem = style([
  flexBox({
    direction: 'row',
    align: 'center',
    justify: 'space-between',
    gap: '.6rem'
  }),
  border({
    width: '1px',
    type: 'solid',
    color: vars.colors.white
  }),
  blank.p('1rem'),
  radius('1rem'),
  {
    selectors: {'&:not(:first-child)': {marginTop: '1rem'}}
  }
]);
export const TodoRemove = style({
  cursor: 'pointer',
  minWidth: '2rem',
  transition: 'color ease .25s',
  selectors: {
    '&:hover': {color: vars.colors.pink}
  }
});

globalStyle(`${CalendarCont} .react-calendar`, {
  borderBottom: `2px solid ${vars.colors.gray02}`,
  paddingBottom: '2rem'
});
globalStyle(`${CalendarCont} 
  .react-calendar__navigation, 
  .react-calendar__month-view__weekdays__weekday, 
  .react-calendar__tile`, {textAlign: 'center'});
globalStyle(`${CalendarCont} .react-calendar__navigation__label`, {margin: '0 2rem'});
globalStyle(`${CalendarCont} .react-calendar__viewContainer`, {marginTop: '2rem'});
globalStyle(`${CalendarCont} 
  .react-calendar__month-view__days__day,
  .react-calendar__month-view__weekdays__weekday`, {padding: '1.4rem 0'});
globalStyle(`${CalendarCont} 
  .react-calendar__month-view__weekdays__weekday--weekend,
  .react-calendar__month-view__days__day--weekend`, {color: vars.colors.pink});
globalStyle(`${CalendarCont} 
  .react-calendar__month-view__weekdays`, {
    borderBottom: `2px solid ${vars.colors.gray02}`,
    marginBottom: '.4rem'
});
globalStyle(`${CalendarCont} 
  .react-calendar__month-view__days__day--neighboringMonth`, {color: vars.colors.gray02});
globalStyle(`${CalendarCont} .react-calendar__tile`, {fontSize: vars.fontSize.small});
globalStyle(`${CalendarCont} .react-calendar__tile--now`, {
  background: vars.colors.gray02,
  borderRadius: '50%'
});
globalStyle(`${CalendarCont} 
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus`, {background: vars.colors.darkgray});
globalStyle(`${CalendarCont} .react-calendar__tile--active`, {
  background: vars.colors.gray01,
  borderRadius: '50%'
});