import { ADD_TODO, DELETE_TODO, SET_TODOS } from "../constants/actions";

const defaultState = {
  todos: [],
};

// eslint-disable-next-line default-param-last
const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case SET_TODOS: {
      return {
        ...state,
        todos: action.payload,
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
