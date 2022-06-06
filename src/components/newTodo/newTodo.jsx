import React, { Component } from "react";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import styles from "./newTodo.module.css";
import { addTodo, updateTodo } from "../../store/actions/todosActions";

class NewTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
    };

    this.changeText = this.changeText.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  changeText(e) {
    this.setState({ text: e.target.value });
  }

  addTodo() {
    const { addTodo } = this.props;
    const { text } = this.state;
    addTodo(text);
    this.setState({ text: "" });
  }

  updateTodo() {
    const { updateTodo, updatedTodo } = this.props;
    const { text } = this.state;
    updateTodo({ ...updatedTodo, text });
    this.setState({ text: "" });
  }

  submitTodo() {
    const { updatedTodo } = this.props;
    if (updatedTodo) {
      this.updateTodo();
    } else {
      this.addTodo();
    }
  }

  render() {
    const { isChange } = this.props;
    const { text } = this.state;
    return (
      <div className={styles.wrapper}>
        <Formik
          initialValues={{
            todo: "",
          }}
          onSubmit={this.submitTodo}
        >
          <Form>
            <input
              type="text"
              className={styles.field}
              name="todo"
              placeholder="Write your ToDo..."
              onChange={this.changeText}
              value={text}
            />
            {isChange ? (
              <button type="submit" className={styles.submit}>
                Update
              </button>
            ) : (
              <button type="submit" className={styles.submit}>
                Add
              </button>
            )}
          </Form>
        </Formik>
      </div>
    );
  }
}

NewTodo.defaultProps = {
  text: "",
  isUpdate: false,
  updatedTodo: null,
};

const mapStateToProps = (state) => {
  const { updatedTodo } = state.todos;
  if (updatedTodo) {
    return { isChange: true, updatedTodo, text: updatedTodo.text };
  }
  return {};
};

export default connect(mapStateToProps, { addTodo, updateTodo })(NewTodo);
