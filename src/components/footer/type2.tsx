
import './style.css'
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
                        <a href="#!mailto:yourmail.domain.com">info@domian.com</a>
                        <hr />
                        <small className="text-muted mb-3 d-block">
                            Join Us Today
                        </small>
                        <a href="#!" className="btn btn-secondary">Upgrade to Pro</a>
                    </div>
                    <div className="col-md-4 col-lg-2 ms-md-auto mb-7 col-7">
                        <h6 className="mb-2">Links</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    About us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Newsletter
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Career <span className="badge bg-success rounded-pill ms-1">Hiring</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Privacy policy
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Terms &amp; conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-2 ms-lg-auto mb-7 col-5">
                        <h6 className="mb-2">Categories</h6>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Design
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Development
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Fashion
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Business
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Nature
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Travel
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8 col-lg-4 mb-7">
                        <h6 className="mb-4">Popular articles</h6>
                        <ul className="list-unstyled">
                            <li className="d-flex card-hover mb-4 align-items-center">
                                <div className="me-3">
                                    <a href="#!" className="d-block width-7x height-7x rounded-3 overflow-hidden">
                                        {/* <img src="assets/img/960x1140/1.jpg" alt="" className="img-fluid img-zoom" /> */}
                                    </a>
                                </div>
                                <div>
                                    <a href="#!" className="lh-sm d-block mb-1">Tips for creating a long-lasting
                                        partnership with your startup</a>
                                    <span className="d-block small text-muted">02 Sep 2021</span>
                                </div>
                            </li>
                            <li className="d-flex card-hover mb-4 align-items-center">
                                <div className="me-3">
                                    <a href="#!" className="d-block width-7x height-7x rounded-3 overflow-hidden">
                                        {/* <img src="assets/img/960x1140/2.jpg" alt="" className="img-fluid img-zoom" /> */}
                                    </a>
                                </div>
                                <div>
                                    <a href="#!" className="lh-sm d-block mb-1">Functional programming in python for
                                        beginners</a>
                                    <span className="d-block small text-muted">18 Sep 2021</span>
                                </div>
                            </li>
                            <li className="d-flex card-hover align-items-center">
                                <div className="me-3">
                                    <a href="#!" className="d-block width-7x height-7x rounded-3 overflow-hidden">
                                        {/* <img src="assets/img/960x1140/3.jpg" alt="" className="img-fluid img-zoom" /> */}
                                    </a>
                                </div>
                                <div>
                                    <a href="#!" className="lh-sm d-block mb-1">Modern and well coded bootstrap themes you should
                                        buy</a>
                                    <span className="d-block small text-muted">19 Aug 2021</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="mb-5 mt-0" />
                <div className="col-sm-5 small text-sm-end">
                    <span className="d-block lh-sm text-muted">© Copyright
                        <script>
                            document.write(new Date().getFullYear())

                        </script>2022. Assan
                    </span>
                </div>
            </div>
        </footer >
    );
};

export default FooterType2;
