import "./style.css";
import article from './article.json';
import book from './book.json';
import { Link } from "react-router-dom";
import { useState } from "react";

const index = () => {
  const [scripts, setScripts] = useState(article);
  const [typeName, setTypeName] = useState('article')
  const types = {
    "article": article,
    "book": book
  }
  const handleScriptChange = (type: "article" | "book") => {
    setTypeName(type)
    setScripts(types[type])
  }
  return (
    <div className="container pt-10">
      <div className="sidebar-widget mb-5">
        <div className="d-flex align-items-center mb-4 aos-init aos-animate" data-aos="fade-up">
          <ul className="mb-5 nav nav-pills d-inline-flex align-items-center justify-content-end mb-0" role="tablist">
            <li className="nav-item small text-muted d-flex me-2 me-md-4 d-none d-md-block">Filter by:</li>
            <li className="nav-item" role="presentation">
              <a className="nav-link active py-1 px-3 px-lg-4" onClick={() => handleScriptChange("article")} href="" data-bs-toggle="pill" data-filter=".design" data-bs-target="#design" aria-selected="false" tabIndex={-1} role="tab">
                Articles
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link py-1 px-3 px-lg-4" onClick={() => handleScriptChange("book")} href="" data-bs-toggle="pill" data-filter=".development" data-bs-target="#development" aria-selected="false" tabIndex={-1} role="tab">
                Book Reviews
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link py-1 px-3 px-lg-4" href="#" data-bs-toggle="pill" data-filter=".motion" data-bs-target="#motion" aria-selected="false" tabIndex={-1} role="tab">
                Videos
              </a>
            </li>
          </ul>
        </div>
        {scripts.map((script, i) => (
          <div data-aos="fade-up" className="aos-init aos-animate" key={i}>
            <Link to={`/article/${typeName}-${i}`} className="p-3 hover-lift hover-shadow rounded-3 border mb-3 d-block text-dark position-relative">
              <div className="d-flex justify-content-start w-100 mb-2 align-items-center">
                <small className="text-muted">{script.date}</small>
              </div>
              <p className="text-reset lh-sm mb-0">
                {script.title}
              </p>
              <small className="text-muted">
              </small>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default index;