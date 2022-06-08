import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";
import ItemTodo from "./itemTodo";
import InputTodo from "./inputTodo";
import { addTodo, deleteTodo, setTodos } from "../../actions/todosActions";
import updateTodo from "../../utils/updateTodo";

const defaultTodo = {
  id: 0,
  text: "",
  isEdit: false,
};

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: defaultTodo,
      isUpdate: false,
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onUpdateTodo = this.onUpdateTodo.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
  }

  onChangeText(e) {
    this.setState((prevState) => ({
      todo: { ...prevState.todo, text: e.target.value },
    }));
  }

  onSubmitForm() {
    const { addTodo, setTodos, todos } = this.props;
    const { todo, isUpdate } = this.state;
    if (isUpdate) {
      const currentTodos = updateTodo(todos, { ...todo, isEdit: false });
      setTodos(currentTodos);
    } else {
      addTodo(todo.text);
    }

    this.setState({ todo: defaultTodo, isUpdate: false });
  }

  onDeleteTodo(id) {
    return () => {
      const { deleteTodo } = this.props;
      deleteTodo(id);
    };
  }

  onUpdateTodo(todo) {
    return () => {
      const { todos, setTodos } = this.props;
      const currentTodos = updateTodo(todos, { ...todo, isEdit: true });
      setTodos(currentTodos);
      this.setState({
        isUpdate: true,
        todo,
      });
    };
  }

  render() {
    const { todos } = this.props;
    const { todo, isUpdate } = this.state;
    return (
      <div className={styles.todoApp}>
        <h3 className={styles.title}>Add ToDo</h3>
        <InputTodo
          text={todo.text}
          isUpdate={isUpdate}
          onChange={this.onChangeText}
          onSubmit={this.onSubmitForm}
        />
        <h3 className={styles.title}>List ToDos</h3>
        <ul className={styles.todoList}>
          {todos && todos.length ? (
            todos.map((todo) =>
              todo.isEdit ? (
                <li className={styles.todoHidden} key={todo.id} />
              ) : (
                <ItemTodo
                  todo={todo}
                  key={todo.id}
                  onDelete={this.onDeleteTodo(todo.id)}
                  onUpdate={this.onUpdateTodo(todo)}
                />
              )
            )
          ) : (
            <span className={styles.noTodos}>No todos(</span>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos } = state;
  return todos;
};

export default connect(mapStateToProps, {
  addTodo,
  deleteTodo,
  setTodos,
})(TodoApp);
