import React from "react";
import './style.css'
interface items {
  title: string;
  content: JSX.Element;
}
const IAccordionDefault = ({ items }: { items: items[] }) => {
  return (
    <div className="accordion" id="accordionParent">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button className="accordion-button collapsed" type="button" role="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
              {item.title}
            </button>
          </div>
          <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionParent">
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IAccordionDefault;
