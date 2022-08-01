import axios from 'axios';
import { useQuery } from 'react-query';

export const API_PATH = '/api/name';

const fetchName = async () => {
  const { data } = await axios.get<{ name: string }>(API_PATH);
  return data;
};

const useName = () => {
  return useQuery('name', () => fetchName());
};

export { useName, fetchName };
