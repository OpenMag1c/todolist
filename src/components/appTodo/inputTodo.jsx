import React, { Component } from "react";
import { Form, Formik } from "formik";
import styles from "./styles.module.css";
import Button from "../button/button";

class InputTodo extends Component {
  render() {
    const { isUpdate, text, onChange, onSubmit } = this.props;
    return (
      <div className={styles.wrapper}>
        <Formik
          initialValues={{
            todo: "",
          }}
          onSubmit={onSubmit}
        >
          <Form className={styles.form}>
            <input
              type="text"
              className={styles.field}
              name="todo"
              placeholder="Write your ToDo..."
              onChange={onChange}
              value={text}
            />
            {isUpdate ? (
              <Button type="submit" text="Update" />
            ) : (
              <Button type="submit" text="Add" />
            )}
          </Form>
        </Formik>
      </div>
    );
  }
}

export default InputTodo;
