import Video from "$components/video";
import View from "$components/view";
import { handleChange } from "$services/function";
import WorshipService from "$services/worship.service";
import worship from "$types/worship";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useParams } from "react-router-dom";
import "./style.css";

const index = () => {
  const imgs: any = ['http://localhost:8001/api/imgs/view/1.png', 'http://localhost:8001/api/imgs/view/2.png', 'http://localhost:8001/api/imgs/view/3.png']

  const { id } = useParams()
  const [item, setItem] = useState<worship>({ worship_no: -1, title: '', subTitle: '', link: '', date: new Date() })
  useEffect(() => {
    WorshipService.get(id)
      .then(r => setItem(r.data))
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);
  const save = () =>
    WorshipService.update(item.worship_no, item)
      .then(r => setItem(r.data))
      .catch((e: Error) => {
        console.log(e);
      });
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
          <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
            <h6 className="mb-0 me-2 me-lg-4">title</h6>
            <span className="border-top d-block flex-grow-1 border-light" />
          </div>
          <input value={item.title} className='form-control' />
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
          <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
            <h6 className="mb-0 me-2 me-lg-4">sub title</h6>
            <span className="border-top d-block flex-grow-1 border-light" />
          </div>
          <input value={item.subTitle} className='form-control' />
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
          <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
            <h6 className="mb-0 me-2 me-lg-4">link</h6>
            <span className="border-top d-block flex-grow-1 border-light" />
          </div>
          <input value={item.link} className='form-control'  onChange={e => handleChange(item, setItem, 'date', e.target.value)}/>
        </div>
        <div className="col-md-4">
          <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
            <h6 className="mb-0 me-2 me-lg-4">Date</h6>
            <span className="border-top d-block flex-grow-1 border-light" />
          </div>
          <Calendar onChange={(date: Date) => handleChange(item, setItem, 'date', date)}
            value={new Date(item.date)}
            formatDay={(locale, date) => String(date.getDate())}
            goToRangeStartOnSelect={true} />
        </div>
        <div className="btn btn-primary mt-4" onClick={() => save()}>저장</div>
      </div>
    </div>
  )
}

export default index;