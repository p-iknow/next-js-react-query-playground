import axios from 'axios';
import { useQuery } from 'react-query';

export const AGE_API_PATH = 'http://localhost:3000/api/age';

const fetchAge = async () => {
  const { data } = await axios.get<{ age: number }>(AGE_API_PATH);
  return data;
};

const useAge = () => {
  return useQuery('age', () => fetchAge());
};

export { useAge, fetchAge };
