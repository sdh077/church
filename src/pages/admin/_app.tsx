import Navigation from "$components/navigation/nav_admin";
import 'boxicons'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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
    <div className="design-theme">
      <Navigation/>
      {/* Component */}
      {component}
    </div>
  );
};

export default App;
