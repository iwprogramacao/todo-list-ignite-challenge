import { v4 as uuidv4 } from "uuid";

import styles from "./Main.module.css";
import plus from "../assets/plus.svg";
import board from "../assets/board.png";

import { Todo } from "./Todo";
import { ChangeEvent, FormEvent, useState } from "react";

interface TodoProps {
  id: string;
  content: string;
  checked: boolean;
}

const list: TodoProps[] = [
  { id: uuidv4(), content: "Estudar React", checked: false },
  { id: uuidv4(), content: "Estilizar website", checked: false },
  { id: uuidv4(), content: "Cobrar as caipinhas da Bruna", checked: false },
  { id: uuidv4(), content: "Criar funcionalidades", checked: true },
  { id: uuidv4(), content: "Tererezin de lei", checked: true },
];

export function Main() {
  const [todoList, setTodoList] = useState(list);

  function handleNewTodo(event: FormEvent) {
    event.preventDefault();
    const newTodoText = event.target.task.value;
    const newTodo: NewTodo = {
      id: uuidv4(),
      content: newTodoText,
      checked: false,
    };
    setTodoList([newTodo, ...todoList]);
  }

  function handleChangeCompletedTask(id: string) {
    const taskToChange: TodoProps[] = todoList.filter((todo) => {
      if (id === todo.id) {
        todo.checked = !todo.checked;
      }
    });
    setTodoList(taskToChange);
  }

  const numberOfTasks = todoList.length;

  const numberOfCompletedTasks = todoList.reduce((sum = 0, task) => {
    if (task.checked) {
      return sum + 1;
    } else {
      return;
    }
  }, 0);

  return (
    <div className={styles.main}>
      <form onSubmit={handleNewTodo}>
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
          <span>{numberOfTasks}</span>
        </div>
        <div className={styles.finishedTasks}>
          <p>Concluídas</p>
          <span>{`${numberOfCompletedTasks} de ${numberOfTasks}`}</span>
        </div>
      </header>
      <div className={styles.todoWrapper}>
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              checked={todo.checked}
              content={todo.content}
              onToggleCompleteTask={handleChangeCompletedTask}
            />
          );
        })}
      </div>
    </div>
  );
}
