import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ onUserChange }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("None");

    useEffect(() => {
        // Fetch user data from the API
        const fetchUsers = async () => {
            try {
                // Include the full URL if needed
                const response = await fetch('http://localhost:3001/user/find-all');
                const data = await response.json();
        
                if (Array.isArray(data)) {
                    setUsers(data.map(user => user.username));
                } else {
                    console.error('Unexpected data format:', data);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleChange = (e) => {
        const user = e.target.value;
        setSelectedUser(user);
        onUserChange(user);  // Notify the parent component
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.wrapper}`}>
                <p>Select User: &nbsp;</p>
                <select className={styles.select} value={selectedUser} onChange={handleChange}>
                    <option disabled value="None">None</option>
                    {users.map(user => (
                        <option key={user} value={user}>{user}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Navbar;
