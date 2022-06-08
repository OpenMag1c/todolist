import React, { Component } from "react";
import styles from "./styles.module.css";
import Button from "../button/button";

class itemTodo extends Component {
  render() {
    const { todo, onDelete, onUpdate } = this.props;
    return (
      <li className={styles.todo}>
        {todo.text}
        <div className={styles.buttons}>
          <Button onClick={onUpdate} text="Update" />
          <Button onClick={onDelete} text="Delete" />
        </div>
      </li>
    );
  }
}

export default itemTodo;
