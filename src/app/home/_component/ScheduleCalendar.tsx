'use client';
import { Typography } from '@/app/_component/Typography';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as style from "@/app/styles/component/calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function ScheduleCalendar(){
  const today = new Date();
  const [data, setData] = useState<Value>(today);

  const dateChangeHandler = (newDate:Value) => {
    setData(newDate);
  };

  return(
    <div className={style.CalendarWrap}>
      <Calendar
        value={data}
        onChange={dateChangeHandler}
        locale='en'
        prev2Label={null}
        next2Label={null}
        formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
      />
      <div className={style.CalendarInfo}>
        <div className={style.TodayInfo}>
          <Typography>{today.getDate()}</Typography>
          <Typography size="small" className={style.Week}>{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat'][today.getDay()]}</Typography>
        </div>
        <div>
          <Typography>Today Schedule</Typography>
          <div className={style.ScheduleList}>
            <Typography size='small'>프로젝트 개발 사전미팅</Typography>
            <Typography size='small'>프로젝트 개발 사전미팅</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}