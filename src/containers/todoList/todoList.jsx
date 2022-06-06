import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./todoList.module.css";
import Todo from "../../components/todo/todo";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <ul className={styles.todoList}>
        {todos && todos.length ? (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        ) : (
          <span className={styles.noTodos}>No todos(</span>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos } = state;
  console.log(todos);
  return todos;
};

export default connect(mapStateToProps)(TodoList);
