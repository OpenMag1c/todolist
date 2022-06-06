import styles from "./app.module.css";
import TodoApp from "../containers/todoApp/todoApp";

function App() {
  return (
    <div className={styles.app}>
      <TodoApp />
    </div>
  );
}

export default App;
