import styles from "./app.module.css";
import AppTodo from "../components/appTodo/appTodo";

function App() {
  return (
    <div className={styles.app}>
      <AppTodo />
    </div>
  );
}

export default App;
