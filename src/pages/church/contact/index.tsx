// https://console.ncloud.com/naver-service/application
//https://navermaps.github.io/maps.js.ncp/docs/naver.maps.PointBounds.html
import { useEffect, useRef } from "react";
import "./style.css";

const index = () => {
  const mapElement = useRef(null);
  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    const location = new naver.maps.LatLng(37.4995096, 127.0674214);
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
  return (
    <div className="">
      <div className="map" ref={mapElement}></div>
    </div>
  )
}

export default index;