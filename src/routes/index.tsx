import { useLocation } from "react-router-dom";
import { Routes_Admin } from "./admin";
import { Routes_Client } from "./client";


export const Routes = () => {
  const location = useLocation();
  const type = location.pathname.toLocaleLowerCase().includes('/admin')
  return type ? <Routes_Admin/>:<Routes_Client/>
};
