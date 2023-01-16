
import './style.css'
const FooterType1 = () => {

    return (
        <footer id="footer" className="position-relative bg-dark text-white">
            <div className="container pt-9 pt-lg-11 pb-5">
                <div className="row mb-5">
                    <div className="col-lg-7 col-md-12 mb-5 mb-lg-0">
                        <div className="row">
                            <div className="col-md-4 mb-5 mb-md-0">
                                <h5 className="mb-4">Products</h5>
                                <a href="#" className="d-block mb-2 mb-lg-3">Assan</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Airbnb</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Codepen</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Chrome</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Dropbox</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Jira</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Slack</a>
                                <a href="#" className="d-block">Zendesk</a>
                            </div>
                            <div className="col-md-4 mb-5 mb-md-0">
                                <h5 className="mb-4">Resources</h5>
                                <a href="#" className="d-block mb-2 mb-lg-3">Bootstrap</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Wrapbootstrap</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Babel</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Browserify</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Greensock</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Javascript</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Gulp</a>
                                <a href="#" className="d-block">Sass</a>
                            </div>
                            <div className="col-md-4">
                                <h5 className="mb-4">Company</h5>
                                <a href="#" className="d-block mb-2 mb-lg-3">About us</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Career</a>
                                <a href="#" className="d-block mb-2 mb-lg-3">Team</a>
                                <a href="#" className="d-block">Blog</a>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 ms-auto">
                        <div className="py-5 bg-gray-800 px-4 rounded-4">
                            <h5 className="mb-4">Contact</h5>
                            <div className="mb-2"><a href="tel:+1123456789" className="fs-5 link-hover-underline">+1 1234 56789</a>
                            </div>
                            <div><a href="mailto:hello@domain.com?subject=Hello!"
                                className="fs-5 link-hover-underline">support@domain.com</a>
                            </div>
                            <hr className="my-4 my-sm-5" />
                            <h5 className="mb-4">Have a project?</h5>
                            <a href="#" className="btn btn-secondary rounded-pill hover-lift btn-hover-arrow"><span>Let's talk with
                                us</span></a>

                            <hr className="my-4 my-sm-5" />
                            <h5 className="mb-4">Follow us</h5>
                            <div className="mb-4 mb-md-0 d-flex">
                                <a href="#!" className="d-inline-block mb-1 me-2 si rounded-pill si-hover-facebook">
                                    <i className="bx bxl-facebook fs-5"></i>
                                </a>
                                <a href="#!" className="d-inline-block mb-1 me-2 si rounded-pill si-hover-twitter">
                                    <i className="bx bxl-twitter fs-5"></i>
                                </a>
                                <a href="#!" className="d-inline-block mb-1 me-2 si rounded-pill si-hover-linkedin">
                                    <i className="bx bxl-linkedin fs-5"></i>
                                </a>
                                <a href="#!" className="d-inline-block mb-1 si rounded-pill si-hover-instagram">
                                    <i className="bx bxl-instagram fs-5"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-0 mb-5" />
                <div className="row justify-content-between">
                    <div className="col-md-7 mb-4 mb-md-0">
                        <div className="d-flex small">
                            <a href="#" className="text-muted d-block me-3">Privacy Policy</a>
                            <a href="#" className="text-muted d-block me-3">Terms and Conditions</a>
                            <a href="#" className="text-muted d-block">Press kit</a>
                        </div>
                    </div>

                    <div className="col-md-5 text-md-end">
                        <span className="d-block lh-sm small text-muted">© Copyright
                            <script>
                                document.write(new Date().getFullYear())
                            </script>. Assan
                        </span>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default FooterType1;
