import http from "./http-common";
import board from "../types/board";

interface boardApi {
  items: Array<board>;
  pageNo: number;
  pageSize: number;
}
const getAll = ({ type, pageNo=1 }: { type: string, pageNo: number }) => {
  return http.get<boardApi>(`/board?type=${type}&pageNo=${pageNo}`);
};

const get = (id: any) => {
  return http.get<board>(`/board/${id}`);
};

const create = (data: board) => {
  return http.post<board>("/board", data);
};

const update = (id: any, data: board) => {
  return http.put<any>(`/board/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/board/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/board`);
};

const findByTitle = (title: string) => {
  return http.get<Array<board>>(`/board?title=${title}`);
};

const BoardService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default BoardService;