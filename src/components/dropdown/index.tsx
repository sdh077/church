import { RootState } from '$store/index';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css'
interface item {
    title: string,
    link: string,
}
interface items {
    title: string,
    items: item[]
}
const Dropdown = ({ title, items }: items) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <NavDropdown title={title} id="nav-dropdown" menuRole='menu' bsPrefix='nav-text px-3 py-0 pe-lg-0' renderMenuOnMount={true}
            onMouseLeave={() => setShowDropdown(false)}
            onMouseOver={() => setShowDropdown(true)}
            show={showDropdown}>
            {items.map((item, i) => (
                <NavDropdown.Item eventKey="4.1" key={i} href={item.link}>
                    {item.title}
                </NavDropdown.Item>
            ))}
        </NavDropdown>
    );
};

export default Dropdown;
