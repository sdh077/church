import React from "react";
import IAccordionCustom from "./custom";
import IAccordionDefault from "./default";
import './style.css'
interface props {
    type: 'default' | 'custom'
    items: item[]
}
interface item {
    title: string
    content: string
}
const IAccordion = ({ type = 'default', items }: props) => {
    const examitems = [{
        title: 'Custom Accordion Item',
        content: <div><strong>This is the third item's accordion body.</strong> It is hidden by
            default, until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance, as well
            as the showing and hiding via CSS transitions. You can modify any of this
            with custom CSS or overriding our default variables. It's also worth noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
        </div>
    }, {
        title: 'Custom Accordion Item',
        content: <div>
            <strong>This is the third item's accordion body.</strong> It is hidden by
            default, until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance, as well
            as the showing and hiding via CSS transitions. You can modify any of this
            with custom CSS or overriding our default variables. It's also worth noting
            that just about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.</div>
    },]
    if (type === 'default')
        return (
            <IAccordionDefault items={examitems} />
        );
    else
        return (
            <IAccordionCustom items={items} />
        )
};

export default IAccordion;
