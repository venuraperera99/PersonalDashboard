import React from 'react';
import styles from '../styles/UserProfile.module.css';

const UserProfile = ({ name, email, profilePicture }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src={profilePicture} alt="Profile" className={styles.profilePicture} />
        <div className={styles.profileInfo}>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <div className={styles.details}>
        <h3>About Me</h3>
        <p>
        I am a Computer Science graduate from the University of Toronto. Most of my exp I have been utilizing React, 
        Node.JS, and Bootstrap to implement core features while leveraging knowledge in Full Stack Development. 
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
