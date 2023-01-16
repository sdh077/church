
import { Link } from 'react-router-dom';
import './style.css'
interface props {
  title: string;
  link: string;
}
const NavLink = ({ title, link }: props) => {
  return (
    <Link to={link} style={{ paddingLeft: 13, textDecoration: 'none' }} className='nav-item dropdown'>
      {title}
    </Link>
  )
};

export default NavLink;
