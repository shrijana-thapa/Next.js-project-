import { updateUserApi } from '@/lib/api/users';
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateUserApi,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['users']});
        }
    });
}