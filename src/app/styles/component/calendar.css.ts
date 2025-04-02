import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/globals.css';
import { flexBox, spacing } from '../utils.css';

// react calendar custom css
export const CalendarWrap = style([
  spacing.mt(2),
  flexBox({
    direction: 'row',
    align: 'flex-start',
    justify: 'flex-start',
    gap: '1rem'
  })
]);
export const TodayInfo = style({textAlign: 'center'});
export const Week = style([spacing.mt('.6rem')]);
export const ScheduleList = style([
  spacing.mt('.6rem'),
  {
    fontSize: vars.fontSize.small,
    textAlign: 'left'
  }
]);
globalStyle(`${ScheduleList} > p`, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
});
globalStyle(`${ScheduleList} > p:not(:first-child)`, {marginTop: '.6rem'});

globalStyle(`${CalendarWrap} .react-calendar`, {
  borderBottom: `2px solid ${vars.colors.gray02}`,
  paddingBottom: '2rem'
});
globalStyle(`${CalendarWrap} 
  .react-calendar__navigation, 
  .react-calendar__month-view__weekdays__weekday, 
  .react-calendar__tile`, {textAlign: 'center'});
globalStyle(`${CalendarWrap} .react-calendar__navigation__label`, {margin: '0 2rem'});
globalStyle(`${CalendarWrap} .react-calendar__viewContainer`, {marginTop: '2rem'});
globalStyle(`${CalendarWrap} 
  .react-calendar__month-view__days__day,
  .react-calendar__month-view__weekdays__weekday`, {padding: '1.4rem 0'});
globalStyle(`${CalendarWrap} 
  .react-calendar__month-view__weekdays__weekday--weekend,
  .react-calendar__month-view__days__day--weekend`, {color: vars.colors.pink});
globalStyle(`${CalendarWrap} 
  .react-calendar__month-view__weekdays`, {
    borderBottom: `2px solid ${vars.colors.gray02}`,
    marginBottom: '.4rem'
});
globalStyle(`${CalendarWrap} 
  .react-calendar__month-view__days__day--neighboringMonth`, {color: vars.colors.gray02});
globalStyle(`${CalendarWrap} .react-calendar__tile`, {fontSize: vars.fontSize.small});

globalStyle(`${CalendarWrap} .react-calendar__tile--now`, {
  background: vars.colors.gray02,
  borderRadius: '50%'
});