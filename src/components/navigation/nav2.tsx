import { RootState } from '$store/index';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../dropdown';
import NavLink from './navLink';
import './style.css'
import navItem from './navItems.json'
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container position-relative">
        <Link className="navbar-brand text-black" to="/">
          HOME
        </Link>
        <div className="collapse navbar-collapse" id="mainNavbarTheme">
          <ul className="navbar-nav ms-auto pe-10">
            {navItem.map((item, i) => (
              <li className="nav-item dropdown" key={i}>
                <Link className="nav-link dropdown-toggle " to="index.html" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.title}
                </Link>
                <div className="dropdown-menu  dropdown-menu-start py-0 pe-lg-0">
                  <div className="overflow-hidden rounded-end">
                    <div className="row mx-0">
                      <div className="col-lg-5 position-relative">
                        <div className="py-1 py-lg-3 d-lg-flex flex-column">
                          {item.items.map((inner, innerI) => (
                            <Link to={inner.link} className="dropdown-item" key={innerI}>{inner.title}</Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
