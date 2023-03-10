import Navigation from "$components/navigation/nav2";
import '$assets/scss/bootstrap.scss'
import '$assets/css/theme.css'
import Footer from "$components/footer/type2";
import 'boxicons'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import '$assets/js/bootstrap.js'


type Props = {
  children: JSX.Element;
};

const App = ({ children: component }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])
  return (
    <div className="design-theme" >
      {/* Navigation */}
      <Navigation />
      {/* Component */}
      {component}
      <Footer />
    </div>
  );
};

export default App;
