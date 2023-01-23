import "./style.css";
import Calendar from 'react-calendar';
import { useEffect, useState } from "react";
import Video from "$components/video";
import moment from 'moment';
import ICalendar from "$types/calendar";
import CalendarService from "$services/calendar.service";
import { useEffectOnce } from "usehooks-ts";
import { dateForm } from "$services/function";

const index = () => {
  const [calendar, setCalendar] = useState<ICalendar>({ calendar_no: -1, link: '', date: dateForm(new Date()) });
  const [items, setItems] = useState<ICalendar[]>([]);
  const handleChange = (name: string, value: any) => setCalendar({ ...calendar, [name]: value, })
  useEffect(() => {
    changeDate(new Date());
  }, [items]);
  useEffectOnce(() => {
    CalendarService.getAll()
      .then(r => setItems(r.data))
      .catch((e: Error) => {
        console.log(e);
      }),
      {}
  })
  const changeDate = (date: Date) => {
    handleChange('date', dateForm(date));
    const index = items.findIndex(item => item.date.slice(0, 10) === dateForm(date))
    if (index === -1) {
      handleChange('link', '')
    } else {
      setCalendar(items[index])
    }
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
          <Video link={calendar.link} type={"youtube"} />
        </div>
      </div>
    </div>
  );
}

export default index;