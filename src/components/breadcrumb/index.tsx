import { Link, useLocation } from "react-router-dom";
import './style.css'
function BreadCrumb() {
    const location = useLocation();
    const items = location.pathname.split('/')
    return (
        <ol className="breadcrumb mb-0">
            <li className="main-color breadcrumb-item"><Link to="/">Home</Link></li>
            {items.map((item, i) => item && (
                <li key={i} className={(items.length - 1 == i) ? "breadcrumb-item active" : "main-color breadcrumb-item"}><Link to={`/${item}`}>{item}</Link></li>
            ))}
        </ol>
    )
}
export default BreadCrumb;
