import React from 'react';
import UserProfile from '../components/UserProfile';
import TodoList from '../components/TodoList';
import Weather from '../components/Weather';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <div className={`${styles.card} ${styles.userProfileCard}`}>
            <UserProfile
              name="John Doe"
              email="johndoe@example.com"
              profilePicture="https://randomuser.me/api/portraits/men/1.jpg"
            />
          </div>
          <div className={`${styles.card} ${styles.weatherCard}`}>
            <Weather />
          </div>
        </div>
        <div className={`${styles.card} ${styles.todoListCard}`}>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
