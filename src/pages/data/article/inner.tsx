import "./style.css";

interface props {
  "title": string;
  "img": string;
  "quo_txt01": string;
  "date": string;
  "content": string;
  "link": string;
  "subTitle"?: string;
  "author"?: string;
}
const inner = ({ script }: { script: props }) => {
  return (
    <div className="">
      <section className="position-relative bg-gradient-light">
        <div className="container pt-14 pb-9 pb-lg-11 position-relative">
          <article className="row pt-lg-7 pb-11">
            <div className="">
              <div className="position-relative pb-3 pb-lg-0">
                <div className="d-flex align-items-center w-100">
                  <a href={script.link} className="badge bg-primary rounded-pill me-3">Link</a>
                  <small className="text-muted">{script.date}</small>
                </div>
                <div>
                  <h2 className="my-4 display-3">
                    {script.title}
                  </h2>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="position-relative bg-white border-bottom">
        <div className="container pb-9 pb-lg-11">
          <img src={script.img} alt="" className="mx-auto img-fluid shadow-lg rounded-4 mb-7 mb-lg-9 position-relative mt-n14" />
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <article className="article mb-9">
                {script.quo_txt01 &&
                  <blockquote className="blockquote rounded-4 rounded-0 px-4 px-lg-6 py-6 py-lg-8 bg-white shadow-lg border-success border-start border-3 my-7 my-lg-9">
                    <h2 className="mb-4 display-7 lead">
                      {script.quo_txt01}
                    </h2>
                  </blockquote>
                }
                <p className="mb-5" dangerouslySetInnerHTML={{ __html: script.content }}/>
              </article>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default inner;