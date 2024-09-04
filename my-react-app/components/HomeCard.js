import React from 'react';
import { useDispatch } from 'react-redux';
import { selectHome } from '../features/homes/homesSlice';

const HomeCard = ({ home, openEditModal }) => {
  const dispatch = useDispatch();

  return (
    <div className="home-card">
      <p>{home.street_address}</p>
      <button onClick={() => { dispatch(selectHome(home.id)); openEditModal(); }}>
        Edit Users
      </button>
    </div>
  );
};

export default HomeCard;
