import Video from "$components/video";
import { dateForm } from "$services/function";
import WorshipService from "$services/worship.service";
import worship from "$types/worship";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
  const [items, setItems] = useState<worship[]>([])
  useEffect(() => {
    WorshipService.getAll(0)
      .then(r => setItems(r.data))
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="container">
      <ul className="list-group">
        {items.map((item, i) => (
          <li className="list-group-item py-3" key={i}>
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <div className="d-sm-flex align-items-center">
                  <div className="mb-3 mb-sm-0 flex-grow-1">
                    <a className="text-dark fs-6" href="#!">{item.title}</a>
                    <p className="mb-0 small">{dateForm(item.date)}</p>
                  </div>
                  <div >
                    <div className="d-flex align-items-center">
                      <Link to={`/data/worship/${item.worship_no}`} className="btn btn-sm btn-outline-light border text-secondary shadow-sm"><i className="me-1 bx bxl-youtube fs-6 lh-1" />이동</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default index;