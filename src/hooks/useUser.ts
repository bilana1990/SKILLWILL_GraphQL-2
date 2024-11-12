import { useQuery } from '@tanstack/react-query';
import { User } from '../types';
import axios from 'axios';

const fetchUser = async (userId: number): Promise<User> => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return data;
};

export const useUser = (userId: number) => {
  return useQuery<User>(['user', userId], () => fetchUser(userId), {
    enabled: !!userId,
  });
};