import {
  ADD_TODO,
  ADD_TODO_TO_UPDATE,
  DELETE_TODO,
  UPDATE_TODO,
} from "../actions/todosActions";

const defaultState = {
  todos: [],
  updatedTodo: null,
};

// eslint-disable-next-line default-param-last
const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id, text }],
      };
    }
    case UPDATE_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                text,
              }
            : todo
        ),
        updatedTodo: null,
      };
    }
    case ADD_TODO_TO_UPDATE: {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      const todo = state.todos[index];
      return {
        ...state,
        // todos: state.todos.slice(0, index).concat(state.todos.slice(index + 1)),
        updatedTodo: { ...state.updatedTodo, ...todo },
      };
    }
    case DELETE_TODO: {
      const id = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      return {
        ...state,
        todos: state.todos.slice(0, index).concat(state.todos.slice(index + 1)),
      };
    }
    default:
      return state;
  }
};

export default todosReducer;
