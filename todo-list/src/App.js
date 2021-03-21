import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);  
  } 

  return (  
    <div className="App">
      <header className="header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo} />
        <TodoList Todo={todos} />
      </header>
    </div>
  )
}

export default App;
