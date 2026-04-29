import { addUserApi } from '@/lib/api/users';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};