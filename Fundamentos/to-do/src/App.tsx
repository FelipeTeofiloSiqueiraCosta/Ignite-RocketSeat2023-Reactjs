import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header";
import styles from "./app.module.css";
import { ListTodo } from "./components/TodoList";

function App() {
  return (
    <main className={styles.container}>
      <Header />
      <form onSubmit={() => {}} className={styles.form}>
        <input
          type="text"
          name="todo-name"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <ListTodo />
    </main>
  );
}

export default App;
