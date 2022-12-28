import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { List } from './components/List';

import './global.css';

interface ToDo {
  id: string;
  content: string;
  finished: boolean;
}

function App() {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  function handleAddTask(task: string) {
    setToDoList((state) => [
      ...state,
      {
        id: uuid(),
        content: task,
        finished: false,
      },
    ]);
  }

  function handleUpdateStatusTask(id: string) {
    const newTodoList = toDoList.map((toDo) => {
      if (toDo.id === id) {
        return {
          ...toDo,
          finished: !toDo.finished,
        };
      }

      return toDo;
    });

    setToDoList(newTodoList);
  }

  function handleDeleteTask(id: string) {
    const newToDoList = toDoList.filter((toDo) => toDo.id !== id);

    setToDoList(newToDoList);
  }

  return (
    <div>
      <Header />

      <Input onAddTask={handleAddTask} />

      <List
        toDoList={toDoList}
        onDeleteTask={handleDeleteTask}
        onUpdateStatusTask={handleUpdateStatusTask}
      />
    </div>
  );
}

export default App;
