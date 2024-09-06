import { useEffect, useState } from 'react';
import EditUserModel from '../EditUserModal/EditUserModel';
import styles from './HomeList.module.css';

const HomeList = ({ selectedUser }) => {
    const [isEditVisible, setIsEditVisible] = useState(false);
    const [currentHomeId, setCurrentHomeId] = useState(null);
    const [currentHomeName, setCurrentHomeName] = useState("");
    const [homes, setHomes] = useState([]);

    useEffect(() => {
        if (selectedUser !== "None") {
            // Fetch homes based on the selected user
            fetchHomes(selectedUser);
        }
    }, [selectedUser]);

    const fetchHomes = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3001/home/find-by-user/${userId}`);
            const data = await response.json();
            setHomes(data);
        } catch (error) {
            console.error('Error fetching homes:', error);
        }
    };

    const handleClick = (homeId, homeName) => {
        setCurrentHomeId(homeId);
        setCurrentHomeName(homeName);
        setIsEditVisible(true);
    };

    return (
        <>
            <div className={`${styles.homesContainer}`}>
                {homes.map((home) => (
                    <div className={`${styles.homeCard}`} key={home.id}>
                        <h3>{home.name}</h3>
                        <p>Price: ${home.list_price}</p>
                        <p>State: {home.state}</p>
                        <p>Zip: {home.zip}</p>
                        <p>Sqft: {home.sqft} sqft</p>
                        <p>Beds: {home.beds}</p>
                        <p>Baths: {home.baths}</p>
                        <button className={`${styles.userBtn}`} onClick={() => handleClick(home.id, home.name)}>Edit Users</button>
                    </div>
                ))}
            </div>
            {isEditVisible && (
                <EditUserModel
                    setIsEditVisible={setIsEditVisible}
                    homeId={currentHomeId}
                    homeName={currentHomeName}
                />
            )}
        </>
    );
};

export default HomeList;
