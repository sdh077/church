import http from "./http-common";
import worship from "../types/worship";

interface worshipApi {
  items: Array<worship>;
  pageNo: number;
  pageSize: number;
}
const getAll = () => {
  return http.get<worship[]>(`/worship`);
};

const get = (id: any) => {
  return http.get<worship>(`/worship/${id}`);
};

const create = (data: worship) => {
  return http.post<worship>("/worship", data);
};

const update = (id: any, data: worship) => {
  return http.put<any>(`/worship/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/worship/${id}`);
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
  removeAll,
  findByTitle,
};

export default WorshipService;