import React from "react";

const NotFound = () => {
  return (
    <section className="position-relative mb-5">
      <div className="container pt-14 pt-lg-15 pb-9">
        <div className="row mb-15">
          <div className="col-md-10 col-lg-8 mx-auto text-center position-relative">

            <div className=" position-relative z-index-1">
              <h1 className="display-1 mb-2">404</h1>
              <h2 className="mb-4">Oops! Page not found</h2>
              <p className="w-lg-75 lead mx-auto mb-5">
                This is a completely custom 404 error page. It seems that page you are looking for no
                longer exists.
              </p>
              <a href="index.html" className="fw-semibold">
                <i className="bx bx-left-arrow-alt lh-1 fw-normal me-2"></i>Back to Home</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
