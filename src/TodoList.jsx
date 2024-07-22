import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css'; // Ensure this CSS file is created and included

export default function TodoList() {
  const [todo, setTodo] = useState([{task: "sample task", id: uuidv4(), isDone: false}]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodo([...todo, {task: newTodo, id: uuidv4(), isDone: false}]);
    setNewTodo("");
  };

  const curTask = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTask = (id) => {
    const updatedTodo = todo.filter((task) => task.id !== id);
    setTodo(updatedTodo);
  };

  const doneHandler = (id) => {
    const updatedTodo = todo.map((task) => 
      task.id === id ? {...task, isDone: true} : task
    );
    setTodo(updatedTodo);
  };

  const allDoneHandler = () => {
    const updatedTodo = todo.map((task) => 
      ({...task, isDone: true})
    );
    setTodo(updatedTodo);
  };

  return (
    <div className="container">
      <h1 className="header">Todo List</h1>
      <input
        type="text"
        placeholder="Add task here"
        value={newTodo}
        onChange={curTask}
        className="input"
      />
      <button onClick={addNewTask} className="addButton">Add Task</button>
      <ul className="todoList">
        {todo.map((task) => (
          <li key={task.id} className="todoItem">
            <span className={`taskText ${task.isDone ? 'done' : ''}`}>
              {task.task}
            </span>
            <button onClick={() => deleteTask(task.id)} className="deleteButton">Delete</button>
            <button onClick={() => doneHandler(task.id)} className="doneButton">Mark as Done</button>
          </li>
        ))}
      </ul>
      <button onClick={allDoneHandler} className="markAllButton">Mark All as Done</button>
    </div>
  );
}
