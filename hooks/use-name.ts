import axios from 'axios';
import { useQuery } from 'react-query';

export const NAME_API_PATH = 'api/name';

const fetchName = async () => {
  const { data } = await axios.get<{ name: string }>(NAME_API_PATH);
  return data;
};

const useName = () => {
  return useQuery('name', () => fetchName());
};

export { useName, fetchName };
