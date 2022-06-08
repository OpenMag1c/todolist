const updateTodo = (todos, todo) =>
  todos.map((item) =>
    item.id === todo.id
      ? {
          ...item,
          ...todo,
        }
      : item
  );

export default updateTodo;
