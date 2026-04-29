import { FetchUserById } from '@/lib/api/users';
import { useQuery } from '@tanstack/react-query';

export const useFetchUserById = (id?: number) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => 
    FetchUserById(id!),
    enabled: !!id,
  });
};