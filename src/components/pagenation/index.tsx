import React, { useState } from "react";
import "./style.scss";

const IPagination = ({ action, pageNo, pageSize }: {
    action: Function;
    pageNo: number;
    pageSize: number
}) => {
    const items = [
        <li onClick={() => action(1)} key={0}>
            <a className="page-link" href="#">
                <i className="bx bx-first-page"></i>
            </a>
        </li>
    ];
    for (let number = pageNo - 2; number <= pageNo + 2; number++) {
        if (number > 0 && number <= pageSize)
            items.push(
                <li className={`page-item ${number === pageNo ? 'active' : ''}`} onClick={() => action(number)} key={number}>
                    <button className="page-link">
                        {number}
                    </button>
                </li>,
            );
    }
    items.push(
        <li onClick={() => action(pageSize)} key={-1}>
            <a className="page-link" href="#">
                <i className="bx bx-last-page"></i>
            </a>
        </li>)

    return (
        <nav className="Page navigation">
            <ul className="pagination">
                {items}
            </ul >
        </nav>

    );
};

export default IPagination;
