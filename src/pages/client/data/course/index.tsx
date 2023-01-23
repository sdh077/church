import IAccordionDefault from "$components/accordion/default";
import "./style.css";

const index = () => {
  const categorys = [{
    title: "새가족반",
  }, {
    title: "양육 과정",

  }, {
    title: "훈련과정",
  }, {
    title: "리더모임",
  }]
  const items = [{
    title: 'Custom Accordion Item',
    content: <div>
      <strong>This is the third item's accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use
      to style each element. These classes control the overall appearance, as well
      as the showing and hiding via CSS transitions. You can modify any of this
      with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    </div>
  }, {
    title: 'Custom Accordion Item',
    content: <div><strong>This is the third item's accordion body.</strong> It is hidden by
      default, until the collapse plugin adds the appropriate classes that we use
      to style each element. These classes control the overall appearance, as well
      as the showing and hiding via CSS transitions. You can modify any of this
      with custom CSS or overriding our default variables. It's also worth noting
      that just about any HTML can go within the <code>.accordion-body</code>,
      though the transition does limit overflow.
    </div>
  },]
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mb-9 mb-lg-0 position-sticky top-0 pt-5">
          <div className="d-flex align-items-center mb-4">
            <h5 className="mb-0 me-3">Categories</h5>
            <span className="flex-grow-1 pt-1 bg-light"></span>
          </div>
          {categorys.map((item, i) => (
            <div className="p-3 hover-lift hover-shadow rounded-3 border mb-3 d-block text-dark position-relative" key={i}>
              <p className="text-reset lh-sm mb-0">
                <div className="d-flex justify-content-start w-100 align-items-center">
                  <span className={`d-block border border-4 rounded-circle border-secondary me-2`}></span>{item.title}
                </div>
              </p>
            </div>
          ))}
        </div>
        <div className="col-lg-9  pt-5">
          <IAccordionDefault items={items} />
        </div>
      </div>
    </div>
  )
}

export default index;