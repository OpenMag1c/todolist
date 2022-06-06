import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./todo.module.css";
import { addToUpdate, deleteTodo } from "../../store/actions/todosActions";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: props.todo,
    };

    this.deleteTodo = this.deleteTodo.bind(this);
    this.addToUpdate = this.addToUpdate.bind(this);
  }

  deleteTodo() {
    const { deleteTodo } = this.props;
    const { todo } = this.state;
    deleteTodo(todo.id);
  }

  addToUpdate() {
    const { addToUpdate } = this.props;
    const { todo } = this.state;
    addToUpdate(todo.id);
  }

  render() {
    const { todo } = this.state;
    return (
      <li className={styles.todo}>
        {todo.text}
        <div className={styles.buttons}>
          <button
            className={styles.buttonTodo}
            type="button"
            onClick={this.addToUpdate}
          >
            Update
          </button>
          <button
            className={styles.buttonTodo}
            type="button"
            onClick={this.deleteTodo}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}

export default connect(null, { deleteTodo, addToUpdate })(Todo);
