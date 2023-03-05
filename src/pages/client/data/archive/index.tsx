import Video from "$components/video";
import WorshipService from "$services/worship.service";
import worship from "$types/worship";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ID from './[id]';
const index = () => {
  const [items, setItems] = useState<worship[]>([])
  useEffect(() => {
    WorshipService.getAll(1)
      .then(r => setItems(r.data))
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);
  const itemss = [
    {
      title: ['우리 시대의 교회론'],
      content: `고상섭목사의 '우리시대의 교회론-팀켈러를 중심으로' 1부 by 한미준 온라인 스쿨`,
      link: 'ZsT6E3EnxHU'
    },
    {
      title: ['고상섭 목사_슬기로운 독서생활'],
      content: `TGC코리아 일일세미나`,
      link: '1XjY-udGVoA'
    },
    {
      title: ['목회자와 독서'],
      content: `2022년 9월 포럼`,
      link: 'Z-znJzPyYgQ'
    },
    {
      title: ['고상섭목사의 팀켈러의 센터처치, 그리고 도시목회적용'],
      content: ``,
      link: '3_UVh2mJ0FI'
    },
    {
      title: ['그리스도 중심 성경읽기 - 가이드 영상'],
      content: `43 | 시편 117~132편 | 고상섭 목사`,
      link: '9ljCYrhmYkY'
    }
  ]
  return (
    <div>
      <div className="container position-relative mt-6">
        <div className="col-xl-9">
          <h1 className="display-4 mb-3">강의</h1>
        </div>
        <ul className="mb-5 nav px-3 d-inline-flex align-items-center justify-content-end mb-0" role="tablist">
          <li className="nav-item small text-muted d-flex me-2 me-md-4 d-none d-md-block">Filter by:</li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link px-0 mx-2 mx-lg-3" to="#" data-bs-toggle="pill" data-filter="*" data-bs-target="#projects" aria-selected="false" role="tab" tabIndex={-1}>
              All
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link px-0 mx-2 mx-lg-3" to="#" data-bs-toggle="pill" data-filter=".design" data-bs-target="#design" aria-selected="false" tabIndex={-1} role="tab">
              Design
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link px-0 mx-2 mx-lg-3" to="#" data-bs-toggle="pill" data-filter=".development" data-bs-target="#development" aria-selected="false" tabIndex={-1} role="tab">
              Development
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link px-0 mx-2 mx-lg-3 active" to="#" data-bs-toggle="pill" data-filter=".motion" data-bs-target="#motion" aria-selected="true" role="tab">
              Motion
            </Link>
          </li>
        </ul>
        <div className="row position-relative z-index-1">
          {items.map((item, i) => (
            <div className="col-lg-12 mb-7 mb-lg-0 my-3" key={i}>
              <Link to={`/data/archive/${item.worship_no}`}>
                <article className="card-hover">
                  <div className="row">
                    <div className="position-relative rounded-5 overflow-hidden col-lg-4">
                      <img src={`https://i.ytimg.com/vi/${item.link}/hq720.jpg`} className="img-fluid img-zoom" alt="" />
                    </div>
                    <div className="pt-4 px-4 col-lg-8">
                      <h5 className="link-multiline">
                        {item.title}
                      </h5>
                      <p className="mb-0 pt-3 text-muted small">
                        {item.subTitle}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index;