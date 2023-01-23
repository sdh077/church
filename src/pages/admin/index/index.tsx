import "./style.css";
import { useState } from "react";
import Video from "$components/video";
import moment from 'moment';
import Calendar from "./calendar";
import Worship from "$admin/archive/worship";

const index = () => {
  const [value, onChange] = useState(new Date());
  const [link, setLink] = useState('');
  return (
    <div>
      <article>
        <Calendar />
      </article>
      <article className="mt-5">
        <Worship />
      </article>
    </div>
  );
}

export default index;