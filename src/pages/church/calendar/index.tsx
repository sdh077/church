import "./style.css";
import Calendar from 'react-calendar';
import { useState } from "react";
import Video from "$components/video";
import moment from 'moment';

const index = () => {
  const [value, onChange] = useState(new Date());
  const datas = {
    "13": "ew2-PjWcdvE",
    "14": "qm3oIiC0jvE",
    "15": "qbxuPPDiYTU",
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Calendar onChange={onChange}
            formatDay={(locale, date) => String(date.getDate())}
            tileClassName={({ date, view }) => {
              if (moment(value).format("YYYY-MM-DD") == moment(date).format("YYYY-MM-DD")) {
                return "highlight";
              } else return ""
            }}
            value={[new Date(2023, 0, 1), new Date(2023, 2, 1)]} goToRangeStartOnSelect={true} />
        </div>
        <div className="col-md-6 mx-auto">
          {moment(value).format("YYYY년 MM월 DD일")}
          <Video link={"ew2-PjWcdvE"} type={"youtube"} />
        </div>
      </div>
    </div>
  );
}

export default index;