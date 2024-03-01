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
        <UserProfile
          name="John Doe"
          email="johndoe@example.com"
          profilePicture="https://via.placeholder.com/150"
        />
        <TodoList />
        <Weather />
      </div>
    </div>
  );
};

export default Dashboard;
