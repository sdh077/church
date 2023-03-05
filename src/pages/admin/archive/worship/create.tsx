import ImageUpload from "$components/imageUpload";
import { dateForm, handleChange } from "$services/function";
import WorshipService from "$services/worship.service";
import file from "$types/file";
import worship from "$types/worship";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
const index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [item, setItem] = useState<worship>({ worship_no: -1, title: '', subTitle: '', link: '', date: new Date(), type: 0 })
  const types = ['주일예배', 'archive'];
  useEffect(() => {

  }, []);
  const save = () =>
    WorshipService.create(item)
      .then(r => navigate(`/admin/archive/worship/${r.data.insertId}`))
      .catch((e: Error) => {
        console.log(e);
      });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 pt-5">
          <div className="mb-5 p-4 border rounded-4">
            <h5 className="mb-4">{types[item.type]}추가</h5>
            <ul className="list-unstyled mb-0">
              {item.type === 0 &&
                < li className="d-flex align-items-center mb-4">
                  <div>날짜</div>
                  <div className="flex-grow-1 border-bottom mx-3" />
                  <div><strong>{dateForm(item.date)}</strong></div>
                </li>
              }
              <li className="d-flex align-items-center mb-4">
                <div>title</div>
                <div className="flex-grow-1 border-bottom mx-3" />
                <div><strong>{item.title}</strong></div>
              </li>
              <li className="d-flex align-items-center mb-4">
                <div>sub title</div>
                <div className="flex-grow-1 border-bottom mx-3" />
                <div><strong>{item.subTitle}</strong></div>
              </li>
              <li className="d-flex align-items-center mb-4">
                <div>link</div>
                <div className="flex-grow-1 border-bottom mx-3" />
                <div><strong>{item.link}</strong></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 pt-5">
          <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
            <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
              <h6 className="mb-0 me-2 me-lg-4">게시글 선택</h6>
              <span className="border-top d-block flex-grow-1 border-light" />
            </div>
            <select className='form-control' value={item.type} onChange={e => handleChange(item, setItem, 'type', Number(e.target.value))}>
              {types.map((t, i) => (
                <option key={i} value={i}>{t}</option>
              ))}
            </select>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
            <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
              <h6 className="mb-0 me-2 me-lg-6">title</h6>
              <span className="border-top d-block flex-grow-1 border-light" />
            </div>
            <input value={item.title} className='form-control' onChange={e => handleChange(item, setItem, 'title', e.target.value)} />
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
            <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
              <h6 className="mb-0 me-2 me-lg-4">sub title</h6>
              <span className="border-top d-block flex-grow-1 border-light" />
            </div>
            <input value={item.subTitle} className='form-control' onChange={e => handleChange(item, setItem, 'subTitle', e.target.value)} />
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1 pt-2">
            <div id="navinput" className="d-flex align-items-center justify-content-center mb-2 pt-4">
              <h6 className="mb-0 me-2 me-lg-4">link</h6>
              <span className="border-top d-block flex-grow-1 border-light" />
            </div>
            <input value={item.link} className='form-control' onChange={e => handleChange(item, setItem, 'link', e.target.value)} />
          </div>
          {item.type === 0 &&
            <Calendar onChange={(date: Date) => handleChange(item, setItem, 'date', date)}
              value={new Date(item.date)}
              formatDay={(locale, date) => String(date.getDate())}
              goToRangeStartOnSelect={true} />}
        </div>
        <div className="btn btn-primary mt-4" onClick={() => save()}>저장</div>
      </div>
    </div >
  )
}

export default index;