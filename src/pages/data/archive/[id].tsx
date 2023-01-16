import Video from "$components/video";
import "./style.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link, useLocation } from "react-router-dom";

const index = () => {
  const location = useLocation();
  return (
    <div className="container pt-9">
      <div className="row">
        <div className="col-md-7">
          <Video type={"youtube"} link={"ZsT6E3EnxHU"} />
          <h2 className="mb-3 display-7 mt-5 fw-normal">
            우리 시대의 교회론 1
          </h2>
          <p className="mb-3">
            고상섭목사의 '우리시대의 교회론-팀켈러를 중심으로' 1부 by 한미준 온라인 스쿨
          </p>
        </div>
        <div className="col-md-5">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <SwiperSlide key={i}>
                <div className="img-wrap">
                  <img src={`/img/archive/qt/${i + 1}.png`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-flex align-items-center mt-5">
            <div className="btn btn-primary mr-5">강의안 다운로드</div>
            <div className="btn btn-secondary ml-5">원본 영상</div>
          </div>
        </div>
        <section className="position-relative overflow-hidden">
          <div className="container py-9 py-lg-11">
            <div className="row">
              {Array.from({ length: 5 }).map((_, i) => (
                <div className="col-12 col-md-8 col-lg-4 col-xl-5 mb-4" key={i}>
                  <Link to="#!" className="card-hover p-4 border d-flex flex-row hover-shadow-lg align-items-center rounded-3 hover-lift">
                    <div className="me-4 rounded-3 flex-shrink-0 overflow-hidden">
                    
                      <img src="https://i.ytimg.com/vi/hllycpsFngs/hq720.jpg" alt="" className="img-fluid img-zoom h-auto width-10x" />
                    </div>
                    <div className="flex-grow-1 h-100">
                      <div className="d-flex small mb-3 justify-content-between">
                        <span className="d-inline-block me-2 small text-secondary">
                          우리 시대의 교회론 {i + 1}
                        </span>
                      </div>
                      <h5 className="mb-0">
                        고상섭목사의 '우리시대의 교회론-팀켈러를 중심으로' {i + 1} 부 by 한미준 온라인 스쿨
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default index;