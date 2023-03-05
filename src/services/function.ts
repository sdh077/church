import moment from "moment"
import React from "react";
import httpImage from "./http-common-image";

const upload = (path: string, data: FormData) => httpImage.post<any>(`/upload/${path}`, data);
const dateForm = (date: Date) => moment(date).format("YYYY-MM-DD")
const handleChange = (state: any, setFnc: React.SetStateAction<any>, name: string, value: any) => setFnc({ ...state, [name]: value, })

export { dateForm, handleChange, upload }