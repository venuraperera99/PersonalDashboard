import React from 'react';
import styles from '../styles/UserProfile.module.css';

const UserProfile = ({ name, email, profilePicture }) => {
  return (
    <div className={styles.container}>
      <img src={profilePicture} alt="Profile" className={styles.profilePicture} />
      <div className={styles.info}>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
