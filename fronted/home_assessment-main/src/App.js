import { useState } from 'react';
import './App.css';
import HomeList from './Components/HomeList/HomeList';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const [selectedUser, setSelectedUser] = useState("None");

  const handleUserChange = (user) => {
      setSelectedUser(user);
  };

  return (
      <div>
          <Navbar onUserChange={handleUserChange} />
          <HomeList selectedUser={selectedUser} />
      </div>
  );
};

export default App;
