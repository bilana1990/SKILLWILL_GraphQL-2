import { useQuery } from '@tanstack/react-query';
import { User } from '../types';
import axios from 'axios';

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
};

export const useUsers = () => {
  return useQuery<User[]>(['users'], fetchUsers);
};