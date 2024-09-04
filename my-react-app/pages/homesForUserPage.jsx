import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditUserModal from '../components/EditUserModal';
import HomeCard from '../components/HomeCard';
import UserDropdown from '../components/UserDropDown';
import { useFetchHomesByUserQuery } from '../features/homes/homeApi';

const HomesForUserPage = () => {
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const { data: homes = [], isLoading } = useFetchHomesByUserQuery(selectedUser, {
    skip: !selectedUser,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHomeUsers, setCurrentHomeUsers] = useState([]);

  const openEditModal = (home) => {
    setCurrentHomeUsers(home.users);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <div>Loading homes...</div>;

  return (
    <div className="homes-for-user-page">
      <UserDropdown />
      <div className="home-list">
        {homes.map((home) => (
          <HomeCard key={home.id} home={home} openEditModal={() => openEditModal(home)} />
        ))}
      </div>
      {isModalOpen && (
        <EditUserModal
          homeId={currentHomeUsers.homeId}
          closeModal={closeModal}
          currentUsers={currentHomeUsers}
        />
      )}
    </div>
  );
};

export default HomesForUserPage;
