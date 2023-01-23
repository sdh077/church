import http from "./http-common";
import Calendar from "../types/calendar";

interface calendarApi {
  items: Array<Calendar>;
  pageNo: number;
  pageSize: number;
}
const getAll = () => {
  return http.get<Calendar[]>(`/calendar`);
};

const get = (id: any) => {
  return http.get<Calendar>(`/calendar/${id}`);
};

const create = (data: Calendar) => {
  return http.post<Calendar>("/calendar", data);
};

const update = (id: any, data: Calendar) => {
  return http.put<any>(`/calendar/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/calendar/${id}`);
};

const removeAll = () => {
  return http.delete<any>(`/calendar`);
};

const findByTitle = (title: string) => {
  return http.get<Array<Calendar>>(`/calendar?title=${title}`);
};

const CalendarService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default CalendarService;