import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header";
import styles from "./app.module.css";
import { ListTodo } from "./components/TodoList";
import { FormEvent, useEffect, useRef, useState } from "react";

export interface Todo {
  description: string;
  done: boolean;
  id: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputDescription = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const todos = localStorage.getItem("@todo-app:todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  function handleToggleStatusTodo(index: number) {
    const current = todos;
    current[index].done = !current[index].done;
    setTodos([...current]);
    localStorage.setItem("@todo-app:todos", JSON.stringify(current));
  }
  function handleDeleteTodo(index: number) {
    const current = todos;
    current.splice(index, 1);
    setTodos([...current]);
    localStorage.setItem("@todo-app:todos", JSON.stringify(current));
  }
  function handleAddTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const createdTodo = {
      description: inputDescription.current?.value || "",
      done: false,
      id: String(new Date().getTime()),
    };
    setTodos([...todos, createdTodo]);
    localStorage.setItem(
      "@todo-app:todos",
      JSON.stringify([...todos, createdTodo])
    );
    inputDescription.current!.value = "";
  }

  return (
    <main className={styles.container}>
      <Header />
      <form onSubmit={(e) => handleAddTodo(e)} className={styles.form}>
        <input
          type="text"
          name="todoName"
          placeholder="Adicione uma nova tarefa"
          ref={inputDescription}
        />
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>

      <ListTodo
        todos={todos}
        toggleStatusTodo={handleToggleStatusTodo}
        deleteTodo={handleDeleteTodo}
      />
    </main>
  );
}

export default App;
