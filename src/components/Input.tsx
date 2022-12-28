import { useState, FormEvent } from 'react';

import { PlusCircle } from 'phosphor-react';

import styles from './Input.module.css';

interface InputProps {
  onAddTask: (value: string) => void;
}

export function Input({ onAddTask }: InputProps) {
  const [newTask, setNewTask] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(newTask);
    setNewTask('');
  }

  const isNewTaskEmpty = newTask.trim().length === 0;

  return (
    <form onSubmit={handleSubmit} className={styles.inputForm}>
      <div className={styles.inputContainer}>
        <input
          type='text'
          name='todo'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Adicione uma nova tarefa'
        />
      </div>
      <button type='submit' disabled={isNewTaskEmpty}>
        Criar
        <PlusCircle size={22} />
      </button>
    </form>
  );
}
