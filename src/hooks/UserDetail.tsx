import React from 'react';
import { useUser } from './hooks/useUser';

interface UserDetailProps {
  userId: number;
}

const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {
  const { data: user, isLoading, error } = useUser(userId);

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default UserDetail;