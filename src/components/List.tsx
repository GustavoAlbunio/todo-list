import { Trash } from 'phosphor-react';

import styles from './List.module.css';

import emptyListImg from '../assets/empty-list.svg';

interface ToDo {
  id: string;
  content: string;
  finished: boolean;
}

interface ListProps {
  toDoList: ToDo[];
  onUpdateStatusTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function List({
  toDoList,
  onDeleteTask,
  onUpdateStatusTask,
}: ListProps) {
  const totalDone = toDoList.filter((toDo) => toDo.finished).length;

  return (
    <main className={styles.toDoListContainer}>
      <header>
        <div className={styles.created}>
          Tarefas criadas
          <span>{toDoList.length}</span>
        </div>
        <div className={styles.done}>
          Concluídas
          <span>
            {toDoList.length > 0 ? `${totalDone} de ${toDoList.length}` : 0}
          </span>
        </div>
      </header>

      <ul className={styles.toDoList}>
        {toDoList.length > 0 ? (
          toDoList.map(({ id, content, finished }) => (
            <li key={id}>
              <div className={styles.checkboxContainer}>
                <input
                  type='checkbox'
                  defaultChecked={finished}
                  onClick={() => onUpdateStatusTask(id)}
                />
                <span />
              </div>
              <p className={`${finished && styles.toDoCompleted}`}>{content}</p>
              <button type='button' onClick={() => onDeleteTask(id)}>
                <Trash size={20} />
              </button>
            </li>
          ))
        ) : (
          <div className={styles.emptyList}>
            <img src={emptyListImg} alt='Image de uma prancheta' />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </ul>
    </main>
  );
}
