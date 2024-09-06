import { useEffect, useState } from 'react';
import styles from './EditUserModel.module.css';

const EditUserModel = ({ setIsEditVisible, homeId, homeName }) => {
    const [users, setUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    // Fetch users associated with the home
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`http://localhost:3001/user/find-by-home/${homeId}`);
                const data = await response.json();
                setUsers(data);
                setSelectedUsers(data.map(user => user.username)); // Pre-select users associated with the home
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [homeId]);

    // Handle checkbox change
    const handleCheckboxChange = (username) => {
        setSelectedUsers((prevSelected) =>
            prevSelected.includes(username)
                ? prevSelected.filter((user) => user !== username)
                : [...prevSelected, username]
        );
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3001/home/update-users', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    homeId: homeId,
                    usernames: selectedUsers
                })
            });

            const result = await response.json();
            if (response.ok) {
                console.log(result.message);
                setIsEditVisible(false); // Close modal after successful submission
            } else {
                console.error(result.error);
            }
        } catch (error) {
            console.error('Error updating users:', error);
        }
    };

    return (
        <div className={`${styles.modalContainer}`} >
            <div className={`${styles.editUContainer}`}>
                <h2>Modify Users for: {homeName}</h2>
                <form onSubmit={handleSubmit}>
                    {users.map((user) => (
                        <div key={user.username}>
                            <input
                                type="checkbox"
                                id={user.username}
                                name={user.username}
                                value={user.username}
                                checked={selectedUsers.includes(user.username)}
                                onChange={() => handleCheckboxChange(user.username)}
                            />
                            <label htmlFor={user.username}> {user.username}</label><br />
                        </div>
                    ))}
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default EditUserModel;
