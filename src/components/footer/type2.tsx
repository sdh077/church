
import './style.css'
import navItem from '../navigation/navItems.json'

const FooterType2 = () => {

    return (
        <footer id="footer" className="bg-white footer position-relative">
            <div className="container pt-9 pt-lg-11 pb-5 position-relative z-index-1">
                <div className="row">
                    <div className="col-md-7 col-lg-3 mb-7">
                        <hr />
                        <small className="text-muted d-block">
                            Enquiries
                        </small>
                        <a href="#!mailto:yourmail.domain.com">sdh077@naver.com</a>
                        <hr />
                        <small className="text-muted mb-3 d-block">
                            contact developer
                        </small>
                    </div>
                    {navItem.map((navi, i) => (
                        <div className="col-md-4 col-lg-2 ms-md-auto mb-7 col-7" key={i}>
                            <h6 className="mb-2 fw-bold">{navi.title}</h6>
                            <ul className="nav flex-column">
                                {navi.items.map((item,i2) => (
                                    <li className="nav-item" key={i2}>
                                        <a href="#" className="nav-link">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <hr className="mb-5 mt-0" />
            </div>
        </footer >
    );
};

export default FooterType2;
