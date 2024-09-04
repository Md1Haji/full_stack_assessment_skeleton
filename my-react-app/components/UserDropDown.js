import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../features/users/usersSlice';
import { useFetchUsersQuery } from '../features/users/usersApi';

const UserDropdown = () => {
  const dispatch = useDispatch();
  const { data: users = [], isLoading } = useFetchUsersQuery();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  if (isLoading) return <div>Loading users...</div>;

  return (
    <select
      value={selectedUser || ''}
      onChange={(e) => dispatch(selectUser(e.target.value))}
    >
      <option value="" disabled>Select a user</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.username}
        </option>
      ))}
    </select>
  );
};

export default UserDropdown;
