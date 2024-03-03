import React, { useState } from 'react';
import styles from '../styles/TodoList.module.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return;
    }

    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTaskItem = {
      id: newId,
      task: newTask.trim(),
      completed: false,
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask('');
  };

  return (
    <div className={styles.todoListContainer}>
      <h2 className={styles.title}>Todo List</h2>
      <div className={styles.addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter task..."
          className={styles.inputTask}
        />
        <button onClick={handleAddTask} className={styles.addButton}>Add Task</button>
      </div>
      <div className={styles.taskTable}>
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Complete</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className={task.completed ? styles.completedTask : ''}>
                <td>{task.task}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />
                </td>
                <td>
                  <button onClick={() => handleDeleteTask(task.id)} className={styles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
