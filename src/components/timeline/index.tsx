import IModal from "$components/modal";
import IVideo from "$components/video";
import timeline from "$types/timeline";
import React, { useState } from "react";
import "./style.scss";

const Index = ({ items }: {
    items: timeline[]
}) => {
    return (
        <ul className="step mx-3 mx-sm-0 list-unstyled mb-0 mt-5">
            {items.map((item: timeline,i) => (
                <li className="step-item" key={i}>
                    <div className="step-row">
                        <span className="step-icon bg-primary text-white">
                            <i className={`bx ${item.type} align-middle lh-1`}></i>
                        </span>
                        <div className="step-content">
                            <h6 className="mb-1">{item.title}</h6>
                            <small className="d-block mb-2 text-muted">{item.date}</small>
                            <div className="mb-0">
                                {item.type === 'bxl-youtube' ? <IModal title={item.title} button={
                                    <i className='bx bx-play'>view</i>
                                } content={
                                    <>
                                        <IVideo link={item.content} type={"youtube"} />
                                    </>
                                }></IModal> : item.content}
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Index;
