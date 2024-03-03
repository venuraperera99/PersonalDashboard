import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1>Welcome to Your Personal Dashboard</h1>
        <p>This dashboard is designed just for you, allowing you to stay organized and informed.</p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>User Profile</h3>
            <p>View and update your personal information.</p>
          </div>
          <div className={styles.feature}>
            <h3>To-Do List</h3>
            <p>Manage your tasks with ease.</p>
          </div>
          <div className={styles.feature}>
            <h3>Weather Forecast</h3>
            <p>Stay up-to-date with the current weather in your city.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
