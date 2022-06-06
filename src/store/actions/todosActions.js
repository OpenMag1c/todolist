export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_TODO_TO_UPDATE = "ADD_TODO_TO_UPDATE";

let todoId = 0;
export function addTodo(text) {
  todoId += 1;
  return {
    type: ADD_TODO,
    payload: {
      id: todoId,
      text,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

export function addToUpdate(id) {
  return {
    type: ADD_TODO_TO_UPDATE,
    payload: id,
  };
}
