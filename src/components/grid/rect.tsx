import React, { useEffect, useState } from "react";
import "./style.css";
function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
const Rect = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            const w = getWindowSize().innerWidth
            const h = getWindowSize().innerHeight
            setWindowSize(w > 1200 ? { innerWidth: 1200, innerHeight: h } : getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const items = [
        {
            link: 'https://smartstore.naver.com/faabscoffee/products/7725439293',
            img: '/img/projects/1.jpeg',
            title: 'Mirror Website',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: '3D, Illustrations, Motion'
        },
        {
            link: 'https://smartstore.naver.com/faabscoffee/products/7725439293',
            img: '/img/projects/5.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: 'Product Design, UI UX'
        },
        {
            link: 'https://smartstore.naver.com/faabscoffee/products/7725439293',
            img: '/img/projects/2.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: '',
            tag: ''
        },
        {
            link: 'https://smartstore.naver.com/faabscoffee/products/7725439293',
            img: '/img/projects/4.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: ''
        },
        {
            link: 'https://smartstore.naver.com/faabscoffee/products/7725439293',
            img: '/img/projects/contact.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: 'tag'
        },
        {
            link: 'https://smartstore.naver.com/faabscoffee/products/7725439293',
            img: '/img/projects/bean.jpeg',
            title: 'Excepteur sint occaecat Branding',
            subTitle: 'Lorem lipsum dolor sit amet...',
            tag: 'tag'
        }
    ]
    const calSize = () => {
        if (window.innerWidth > 992) return 4
        if (window.innerWidth > 767) return 2
        else return 1
    }
    return (
        <section className="position-relative hr-linear-bottom bg-white">
            <div className="container-fluid py-9 py-lg-11 position-relative z-index-1">
                <div className="position-relative">
                    <div id="projects" className="row g-2" role="tabpanel" style={{ "position": "relative", height: windowSize.innerWidth / calSize() * (parseInt(String(items.length / calSize())) * 2) }}>
                        {items.map((item, i) => (
                            <div key={i} className="col-md-6 col-lg-3 development grid-item position-absolute" style={{ "left": windowSize.innerWidth / calSize() * (i % calSize()), "top": windowSize.innerWidth / calSize() * parseInt(String(Number(i / calSize()))) }}>
                                <a href="#!" className="text-white bg-dark position-relative d-block card-hover-2">
                                    <img src={item.img} alt="" className="w-100 img-zoom overflow-hidden" />
                                    <div className="card-hover-2-overlay position-absolute start-0 top-0 w-100 h-100 d-flex px-4 py-5 flex-column justify-content-between">
                                        <div className="card-hover-2-header w-100">
                                            <div className="card-hover-2-title">
                                                <h5 className="fs-5 mb-2">{item.title}</h5>
                                            </div>
                                            <p className="mb-0">
                                                {item.subTitle}
                                            </p>
                                        </div>
                                        <div className="card-hover-2-footer w-100 mt-auto">
                                            <span className="tags d-block flex-grow-1">{item.tag}</span>
                                            <span className="card-hover-2-footer-link">
                                                <span>View case study</span>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Rect;
