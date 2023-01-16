import React from "react";
import './style.css'
interface items {
    items: {
        title: string;
        content: string;
    }[]
}
const IAccordionCustom = ({ items }: items) => {
    return (
        <div className="accordion accordion-custom" id="custom-accordionParent">
            <div className="accordion" id="accordionParent">
                {items.map((item, index) => (
                    <div className="accordion-item mb-3" key={index}>
                        <div className="accordion-header" id={`custom-heading${index}`}>
                            <button className="accordion-button collapsed" type="button" role="button" data-bs-toggle="collapse" data-bs-target={`#custom-collapse${index}`} aria-expanded="false" aria-controls={`custom-collapse${index}`}>
                                {item.title}
                            </button>
                        </div>
                        <div id={`custom-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#custom-accordionParent">
                            <div className="accordion-body">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IAccordionCustom;
