import styles from "./Main.module.css";
import plus from "../assets/plus.svg";
import board from "../assets/board.png";
import { Todo } from "./Todo";

export function Main() {
  return (
    <div className={styles.main}>
      <form action="">
        <input
          name="task"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button type="submit">
          Criar <img src={plus} />
        </button>
      </form>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.finishedTasks}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      <div className={styles.todoWrapper}></div>
    </div>
  );
}
