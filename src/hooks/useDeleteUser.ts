import { deleteUserApi } from '@/lib/api/users';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteUserApi,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']});
        },
    });
}