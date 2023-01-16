import http from "./http-common";
import timeline from "../types/timeline";

const getAll = () => {
  return http.get<Array<timeline>>("/history");
};

const get = (id: any) => {
  return http.get<timeline>(`/history/${id}`);
};

const create = (data: timeline) => {
  return http.post<timeline>("/history", data);
};

const update = (id: any, data: timeline) => {
  return http.put<any>(`/history/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/history/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/history`);
};

const findByTitle = (title: string) => {
  return http.get<Array<timeline>>(`/history?title=${title}`);
};

const HistoryService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default HistoryService;