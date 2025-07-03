'use client';

import { useState } from 'react';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 border rounded-md ${
                todo.completed ? 'bg-green-100 line-through' : 'bg-white'
              }`}
            >
              <span onClick={() => toggleTodo(index)} className="cursor-pointer">
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
