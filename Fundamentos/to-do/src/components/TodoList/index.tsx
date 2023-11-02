import { ClipboardText, Trash } from "@phosphor-icons/react";
import styles from "./index.module.css";
import { Todo } from "../../App";

interface ListTodoProps {
  todos: Todo[];
  toggleStatusTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}

export function ListTodo({
  todos,
  toggleStatusTodo,
  deleteTodo,
}: ListTodoProps) {
  const todoLength = todos.length;

  const amountDoneTodos = todos.filter((todo) => todo.done).length;

  return (
    <div className={styles.container}>
      <section>
        <div>
          Tarefas criadas <span>{todoLength}</span>
        </div>
        <div>
          Concluídas{" "}
          <span>
            {amountDoneTodos} de {todoLength}
          </span>
        </div>
      </section>
      <ul className={styles.list}>
        {todos.length > 0 ? (
          todos.map((todo, index) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  defaultChecked={todo.done}
                  onClick={() => toggleStatusTodo(index)}
                />
                <p className={todo.done ? styles.done : ""}>
                  {todo.description}
                </p>
                <Trash size={29} onClick={() => deleteTodo(index)} />
              </li>
            );
          })
        ) : (
          <article>
            <ClipboardText size={56} />
            <div>
              <b>Vocé ainda não tem tarefas cadastradas</b>
              <p>Crie tarefas e organize sus itens de afazeres</p>
            </div>
          </article>
        )}
      </ul>
    </div>
  );
}
