import React, { useEffect } from "react";
import './style.css'
type TFade = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-in-down' | 'zoom-in-up' | 'zoom-in-left' | 'zoom-in-right'
type TSplitting = 'Spilitting-up' | 'Spilitting-down' | 'Spilitting-left' | 'Spilitting-right' | 'Spilitting-zoomIn' | 'Spilitting-zoomOut'
interface props {
  children: JSX.Element | string | number;
  type: TFade | TSplitting,
  duration?: number
}
function isTFade(type: TFade | TSplitting): type is TFade {
  return true
}
const IAnimation = ({ children, type, duration = 800 }: props) => {
  if (isTFade(type)) {
    return (
      <div data-aos={type} data-aos-duration={duration}>
        {children}
      </div>
    )
  }
  else {
    return (
      <div data-aos data-aos-duration={duration} >
        <div className={type} data-splitting>
          {children}
        </div>
      </div>
    )
  }
};

export default IAnimation;
