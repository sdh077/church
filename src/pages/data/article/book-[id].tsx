import "./style.css";
import article from './article.json';
import book from './book.json';
import { useParams } from "react-router-dom";
import { useState } from "react";
import Inner from "./inner";

const index = () => {
  const { id } = useParams();
  const i = Number(id);
  return (
    <Inner script={book[i]}/>
  )
}

export default index;