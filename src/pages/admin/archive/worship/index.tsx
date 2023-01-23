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
    WorshipService.getAll()
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
            <Link to={`/admin/archive/worship/${item.worship_no}`}>
            <div className="d-flex align-items-start">
              <div className="flex-grow-1">
                <div className="d-sm-flex align-items-center">
                    <p className="mb-0 small">{dateForm(item.date)} 수정</p>
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