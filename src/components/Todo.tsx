import btnChecked from "../assets/button-checked.svg";
import btnNotChecked from "../assets/button-not-checked.svg";

import styles from "./Todo.module.css";
import { Trash } from "phosphor-react";

interface TodoProps {
  id: string;
  checked?: boolean;
  content: string;
  onToggleCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Todo({
  id,
  checked = false,
  content,
  onToggleCompleteTask,
  onDeleteTask,
}: TodoProps) {
  function handleChangeCompletedTask() {
    onToggleCompleteTask(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.todo}>
      <button onClick={handleChangeCompletedTask}>
        <img src={checked ? btnChecked : btnNotChecked} />
      </button>
      <p className={checked ? styles.textChecked : styles.textNotChecked}>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
