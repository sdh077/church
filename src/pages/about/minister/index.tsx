import Hover from "$components/motion/hover";
import { archive } from "$types/archive";
import React from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Index = () => {
    const archives: archive[] = [
        {
            id: 1,
            title: null,
            subTitle: '',
            content: `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: '1.jpg',
        },
        {
            id: 3,
            title: 'title1',
            subTitle: 'sub',
            content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            img: null
        }
    ]
    const { id } = useParams();
    return (
        <div className="container pt-8 pb-9 pb-lg-11 position-relative">
            <div className="col-lg-10 col-xl-8 mb-3">
                <h2 className="display-5 fw-bold my-1">
                    Greetings
                </h2>
                <div className="d-flex align-items-center w-100 mb-5">
                    <small className="text-muted">인사말</small>
                </div>
            </div>
            <div data-aos="fade-up" className="row mb-5 aos-init aos-animate">
                <div className="col-lg-12">
                    <div className="card flex-md-row flex-column overflow-hidden rounded-4 shadow-sm bg-white">
                        <div className="col-md-4">
                            <div className="d-flex flex-column border-end-md align-items-md-center justify-content-center h-100 bg-white border-light">
                                <img src="/img/people/2.jpeg" alt="" className="h-auto" />
                            </div>
                        </div>
                        <div className="card-body h-100 p-4 py-5 py-md-7 px-md-5 flex-grow-1">
                            <div className="d-md-flex align-items-md-center">
                                <div className="ps-md-9 pe-md-5">
                                    <p className="fs-6 mb-4">
                                        성도 한 사람 한 사람의 삶이 하나님 앞에서 가장 아름답게 열매맺는 일을 목적으로 살아가고 있다.
                                        예수님을 믿었지만, 목회가 무엇인지 잘 모르고 방황하는 시절에 사랑의교회 고 옥한흠 목사를 통해 목회적 회심을 경험했고  한 영혼을 위해 목숨을 거는 제자훈련 목회를 철학으로 삼고 있다.  또 오늘날 문화에 맞는 복음을 전하기를 꿈꾸며 리디머 교회 팀 켈러 목사를 통해  복음의 가치를 재발견하여 복음과 제자훈련을 접목하여 복음적 훈련 공동체를 추구하고 있다.
                                    </p>
                                    <p className="fs-6 mb-4">
                                        영남신학대학교와 합동신학대학원을 졸업했고, 사랑의교회 국제제자훈련원에서 자료개발을 담당했으며, 사랑의교회 청년부를 거쳐 현재 그 사랑교회를 섬기고 있다.  고 옥한흠 목사의 철학을 이어가고자 옥한흠 목사의 호를 딴 은보포럼 이사를 맡아 제자훈련 사역을 목회자들에게 소개하는 일을 하고 있고, 뉴욕의 리디머 장로교회 팀 켈러 목사가 만든 City to City 라는 단체의 한국 지부인 CTCKorea 이사로 섬기면서 복음적 교회 개척운동에 힘쓰고 있다.  또한 문화 속에 복음을 심는 일을 꿈꾸며. 창조예술연구소 대표로 섬기며  예술을 통한 문화 사역을 통해 하나님의 아름다움을 소개하고 있다.
                                    </p>
                                    <div className="mb-5">
                                        <small className="d-block lh-1">고상섭</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
