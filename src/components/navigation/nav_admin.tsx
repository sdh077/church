import { RootState } from '$store/index';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from '../dropdown';
import NavLink from './navLink';
import './style.css'
import navItem from './navItems.json'
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5">
      <div className="container position-relative">
        <Link className="navbar-brand text-black" to="/">
          HOME
        </Link>
        <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
          <button className="navbar-toggler order-last" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbarTheme" aria-controls="mainNavbarTheme" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <i />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
