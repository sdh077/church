import Video from "$components/video";
import "./style.css";

import { Link, useLocation } from "react-router-dom";
import View from "$components/view";

const index = () => {
  const location = useLocation();
  return (
    <div className="container pt-9">
      {/* <View /> */}
    </div>
  )
}

export default index;