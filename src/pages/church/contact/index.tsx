// https://console.ncloud.com/naver-service/application
//https://navermaps.github.io/maps.js.ncp/docs/naver.maps.PointBounds.html
import { useEffect, useRef } from "react";
import "./style.css";
import { isMobile } from 'react-device-detect';

const index = () => {
  const mapElement = useRef(null);
  const lng = 37.4995096
  const lat = 127.0674214;
  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(lng, lat);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
        style: 2,
      },
      disableTwoFingerTapZoom: false,
      draggable: false
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    const marker = new naver.maps.Marker({
      map: map,
      position: location
    });
    const infowindow = new naver.maps.InfoWindow({
      content: '<div style="width:150px;text-align:center;padding:10px;">그 사랑 교회</div>'
    });
    infowindow.open(map, marker);

  }, []);
  const Click = (type: "naver" | "kakao") => {
    if (isMobile) {
      const url = {
        "naver": `nmap://map?&lat=${lat}&lng=${lng}`,
        "kakao": `kakaomap://look?p=${lng},${lat}`
      }
      window.open(url[type])
    } else {
      const url = {
        "naver": 'https://naver.me/xnnB3BpP',
        "kakao": 'http://kko.to/EgxzaPKG7i',
      }
      window.open(url[type])
    }
  }
  return (
    <div className="">
      <div className="container py-9 py-lg-11">
        <div className="row mb-9 mb-lg-11">
          <div className="col-lg-4 mb-5 mb-lg-0 text-center">
            <h5 className="mb-2">주소</h5>
            <p className="mb-3 small">
              서울 강남구 영동대로 229 6층 D.LAB 어학원 (자연드림 대치점 6층)
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0 text-center">
            <h5 className="mb-2">지도 열기</h5>
            <div className="mb-3 small">
              <div className="btn btn-secondary" onClick={() => Click("naver")}>네이버맵에서 열기</div>
              <div className="btn btn-secondary" onClick={() => Click("kakao")}>카카오맵에서 열기</div>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <h5 className="mb-2">Phone</h5>
            <p className="mb-3 small">
              서울 강남구 영동대로 229 6층 D.LAB 어학원 (자연드림 대치점 6층)
            </p>
            <a href="#!" className="btn btn-sm btn-light border shadow-sm">
              <i className="bx bx-phone align-middle fw-normal me-1" /> 010-0000-0000
            </a>
          </div>
        </div>
        <div className="overflow-hidden mb-9 mb-lg-11 shadow border rounded-3">
          <div className="map" ref={mapElement}></div>
        </div>

      </div>

    </div>
  )
}

export default index;