'use client';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Table } from './Table';
import { User } from '@/types/user';
import { useDeleteUser } from '@/hooks/useDeleteUser';
import { fetchUsers } from '@/lib/api/users';

const UserDashboard = () => {
  const deleteMutation = useDeleteUser();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching users.</div>;

  const handleEdit = (user: User) => {
    router.push(`/users/edit/${user.id}`);
  };

  const handleDelete = (userId: number) => {
    deleteMutation.mutate(userId);
  };

  return (
    <>
      <div className="p-6 max-w-5xl mx-auto">
        {/* Add User Button */}
        <button
          onClick={() => {
            router.push('/users/add');
          }}
          className="bg-green-500 text-white px-3 py-2 rounded mb-4"
        >
          + Add User
        </button>
        <Table data={data} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default UserDashboard;
