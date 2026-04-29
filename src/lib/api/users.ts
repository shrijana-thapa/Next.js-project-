import { User } from '@/types/user';
import axios from 'axios';
import { log } from 'console';
export const fetchUsers = async () => {
  const res = await axios.get('/api/users');
  return res.data;
};

export const deleteUserApi = async (id: number) => {
  const res = await fetch('/api/users', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  return res.json();
};

export const FetchUserById = async (id: number) => {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) {
    throw new Error('User not found');
  }

  return res.json();
};

export const updateUserApi = async ({
  id,
  data,
}: {
  id: number;
  data: User;
}) => {
  const res = await fetch(`/api/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const addUserApi = async (data: User) => {
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
