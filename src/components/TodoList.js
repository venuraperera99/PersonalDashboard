import React, { useState } from 'react';
import styles from '../styles/TodoList.module.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const addTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), task: inputTask, completed: false }]);
      setInputTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.container}>
      <h2>Todo List</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add a task..."
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? styles.completed : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.task}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
