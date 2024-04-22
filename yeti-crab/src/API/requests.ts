import { useHttp } from '@/hooks/http.hook';

const baseURL = 'http://localhost:3001/api';
const { request } = useHttp();

export const API = {
 applications: {
  createApplication: (body: Record<string, string>) =>
   request(`${baseURL}/applications`, 'POST', JSON.stringify(body)),
  getApplications: () => request(`${baseURL}/applications`),
  updateStatus: (status: { id: string; status: string }) =>
   request(`${baseURL}/applications/status`, 'PATCH', JSON.stringify(status)),
  changeValueCell: (data: { id: string; key: string; value: string }) =>
   request(`${baseURL}/applications/value`, 'PATCH', JSON.stringify(data)),
  deleteApplicationById: (id: { id: string }) =>
   request(`${baseURL}/applications`, 'DELETE', JSON.stringify(id)),
 },
};
