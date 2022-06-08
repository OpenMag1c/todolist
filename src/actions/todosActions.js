import { v4 as uuidv4 } from "uuid";
import { ADD_TODO, DELETE_TODO, SET_TODOS } from "../constants/actions";

export function addTodo(text, id = uuidv4()) {
  return {
    type: ADD_TODO,
    payload: {
      id,
      text,
      isEdit: false,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    payload: todos,
  };
}
