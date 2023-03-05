import "./style.css";
import Calendar from 'react-calendar';
import { useEffect, useState } from "react";
import Video from "$components/video";
import moment from 'moment';
import ICalendar from "$types/calendar";
import CalendarService from "$services/calendar.service";
import { useEffectOnce } from "usehooks-ts";
import { dateForm, handleChange } from "$services/function";

const index = () => {
  const [calendar, setCalendar] = useState<ICalendar>({ calendar_no: -1, link: '', date: dateForm(new Date()) });
  const [items, setItems] = useState<ICalendar[]>([]);
  useEffect(() => {
  }, []);
  useEffectOnce(() => {
    CalendarService.getAll()
      .then(r => setItems(r.data))
      .then(_ => changeDate(new Date()))
      .catch((e: Error) => {
        console.log(e);
      }),
      {}
  })
  const changeDate = (date: Date) => {
    const index = items.findIndex(item => item.date.slice(0, 10) === dateForm(date))
    setCalendar(index === -1 ? { calendar_no: -1, link: '', date: dateForm(date) } : items[index])
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Calendar onChange={changeDate}
            value={new Date(calendar.date)}
            formatDay={(locale, date) => String(date.getDate())}
            tileClassName={({ date, view }) => {
              if (calendar.date === dateForm(date)) {
                return "";
              } else return ""
            }}
            goToRangeStartOnSelect={true} />
        </div>
        <div className="col-md-6 mx-auto">
          {moment(calendar.date).format("YYYY년 MM월 DD일")}
          {calendar.link && <div>
            <Video link={calendar.link} type={"youtube"} />
          </div>}
        </div>
      </div>
    </div>
  );
}

export default index;