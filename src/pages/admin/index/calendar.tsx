import "./style.css";
import Calendar from 'react-calendar';
import { useEffect, useState } from "react";
import CalendarService from "$services/calendar.service";
import ICalendar from "$types/calendar";
import { useEffectOnce } from 'usehooks-ts'
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
    const index = items.findIndex(item => item.date.slice(0, 10) === dateForm(date))
    setCalendar(index === -1 ? { calendar_no: -1, link: '', date: dateForm(date) } : items[index])
  }
  const retrieve = () => CalendarService.getAll()
    .then(r => setItems(r.data))
    .catch((e: Error) => {
      console.log(e);
    });
  const calendarChange = () => {
    if (calendar.link)
      CalendarService.update(calendar.calendar_no, calendar,)
        .then(r => retrieve())
        .catch((e: Error) => {
          console.log(e);
        });
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
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Youtube Link</span>
            <input value={calendar.link} onChange={e => handleChange('link', e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            <label onClick={calendarChange} className="btn btn-outline-primary text-white">수정</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;