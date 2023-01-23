import "./style.css";
import article from './article.json';
import { useParams } from "react-router-dom";
import Inner from "./inner";

const index = () => {
  const { id } = useParams();
  const i = Number(id);
  return (
    <Inner script={article[i]}/>
  )
}

export default index;