import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Prepare for interview', done: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (!newTask.trim()) return;
    const task = {
      id: tasks.length + 1,
      text: newTask,
      done: false,
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const toggleDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📝 Task Tracker</h1>
      <input
        type="text"
        value={newTask}
        placeholder="Add new task"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              textDecoration: task.done ? 'line-through' : 'none',
              cursor: 'pointer',
              marginTop: '8px'
            }}
            onClick={() => toggleDone(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
