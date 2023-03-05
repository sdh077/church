import Video from "$components/video";
import { dateForm } from "$services/function";
import WorshipService from "$services/worship.service";
import worship from "$types/worship";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
  const [items, setItems] = useState<worship[]>([])
  const [type, setType] = useState(0)
  useEffect(() => {
    WorshipService.getAll(type)
      .then(r => setItems(r.data))
      .catch((e: Error) => {
        console.log(e);
      });
  }, [type]);
  return (
    <div className="container">
      <div className="mb-5">
        <div className="btn btn-secondary" onClick={() => setType(0)}>주일예배</div>
        <div className="btn btn-secondary" onClick={() => setType(1)}>Archive</div>
      </div>
      <div className="display-6 mb-2">
        {['주일예배','Archive'][type]}
      </div>
      <ul className="list-group">
        <li className="list-group-item py-3">
          <Link to='/admin/archive/worship/create'
            state={type}>
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <div className="d-sm-flex align-items-center">
                  <p className="mb-0 small">추가하기</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
        {items.map((item, i) => (
          <li className="list-group-item py-3" key={i}>
            <Link to={`/admin/archive/worship/${item.worship_no}`}>
              <div className="d-flex align-items-start">
                <div className="flex-grow-1">
                  <div className="d-sm-flex align-items-center">
                    <p className="mb-0 small">{item.type===0 ? dateForm(item.date) : item.title} - 수정</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default index;