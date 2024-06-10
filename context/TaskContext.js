// context/TaskContext.js
import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.titulo === updatedTask.titulo ? updatedTask : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
