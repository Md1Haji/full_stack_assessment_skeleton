import React, { useState, useEffect } from 'react';
import { useFetchUsersQuery } from '../features/users/usersApi';
import { useUpdateHomeUsersMutation } from '../features/homes/homesApi';

const EditUserModal = ({ homeId, closeModal, currentUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState(new Set(currentUsers));
  const { data: users = [] } = useFetchUsersQuery();
  const [updateHomeUsers, { isLoading }] = useUpdateHomeUsersMutation();

  const toggleUserSelection = (userId) => {
    setSelectedUsers((prev) => {
      const newSet = new Set(prev);
      newSet.has(userId) ? newSet.delete(userId) : newSet.add(userId);
      return newSet;
    });
  };

  const handleSave = async () => {
    if (selectedUsers.size === 0) {
      alert('At least one user must be selected.');
      return;
    }
    await updateHomeUsers({ homeId, userIds: Array.from(selectedUsers) });
    closeModal();
  };

  useEffect(() => {
    setSelectedUsers(new Set(currentUsers));
  }, [currentUsers]);

  return (
    <div className="modal">
      <h2>Edit Users for Home</h2>
      {isLoading && <p>Saving...</p>}
      {users.map((user) => (
        <div key={user.id}>
          <input
            type="checkbox"
            checked={selectedUsers.has(user.id)}
            onChange={() => toggleUserSelection(user.id)}
          />
          <label>{user.username}</label>
        </div>
      ))}
      <button onClick={handleSave} disabled={selectedUsers.size === 0}>
        Save
      </button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default EditUserModal;
