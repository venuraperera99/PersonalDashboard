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
          name="Venura Perera"
          email="venura.perera@mail.utoronto.ca"
          profilePicture="https://randomuser.me/api/portraits/men/1.jpg"
        />
        <TodoList />
        <Weather />
      </div>
    </div>
  );
};

export default Dashboard;
