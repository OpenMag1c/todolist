import React, { Component } from "react";
import styles from "./todoApp.module.css";
import NewTodo from "../../components/newTodo/newTodo";
import TodoList from "../todoList/todoList";

class TodoApp extends Component {
  render() {
    return (
      <div className={styles.todoApp}>
        <h3 className={styles.title}>Add ToDo</h3>
        <NewTodo />
        <h3 className={styles.title}>List ToDos</h3>
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
