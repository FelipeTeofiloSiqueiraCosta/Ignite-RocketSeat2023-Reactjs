import { Trash } from "@phosphor-icons/react";
import styles from "./index.module.css";

// interface Todo {
//   description: string;
//   done: boolean;
// }

// interface ListTodoProps {
//   todos: Todo[];
// }

export function ListTodo() {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {/* {todos.map((todo, index) => {
          return ( */}
        <li key={""}>
          <input type="checkbox" value="checked" />
          <p className={styles.done}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ea
            impedit facere error! Quo, possimus necessitatibus officiis
            voluptates harum, facilis omnis accusantium blanditiis veritatis ea
            est quam autem voluptate libero!
          </p>
          <Trash size={29} />
        </li>
        {/* );
        })} */}
      </ul>
    </div>
  );
}
