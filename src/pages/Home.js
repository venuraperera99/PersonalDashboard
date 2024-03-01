import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h2>Welcome to Your Personal Dashboard</h2>
      <p>This is the home page. You can navigate to the dashboard to view your profile, todo list, and weather.</p>
    </div>
  );
};

export default Home;
