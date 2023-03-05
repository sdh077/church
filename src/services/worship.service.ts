import http from "./http-common";
import httpImage from "./http-common-image";
import worship, { IWorshipImg } from "../types/worship";

interface worshipApi {
  items: Array<worship>;
  pageNo: number;
  pageSize: number;
}
const getAll = (type: any) => {
  return http.get<worship[]>(`/worship?type=${type}`);
};

const get = (id: any) => {
  return http.get<worship>(`/worship/${id}`);
};
const getImage = (id: any) => {
  return http.get<IWorshipImg[]>(`/worship/img/${id}`);
}
const upload = (id: any, data: FormData) => httpImage.post<any>(`/worship/upload/${id}`, data);

const create = (data: worship) => {
  return http.post<{ insertId: number }>("/worship", data);
};

const update = (id: any, data: worship) => {
  return http.put<any>(`/worship/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/worship/${id}`);
};
const removeImg = (id: any, link: string) => {
  return http.delete<any>(`/worship/img/${id}?path=${link}`);
};

const removeAll = () => {
  return http.delete<any>(`/worship`);
};

const findByTitle = (title: string) => {
  return http.get<Array<worship>>(`/worship?title=${title}`);
};

const WorshipService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeImg,
  removeAll,
  findByTitle,
  getImage,
  upload
};

export default WorshipService;