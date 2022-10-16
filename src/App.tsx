import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    console.log(todos);
    setInputValue('');
  };

  const handleEdit = (inputValue: string, id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleChecked = (checked: boolean, id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = (id:number) => {
    const newTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(newTodos)
    }

  return (
    <div className="App">
      <div>
        <h2>TodoList</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
          <input type="submit" value="作成" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => handleEdit(e.target.value, todo.id)}
                className="inputText"
                value={todo.inputValue}
                disabled={todo.checked}
              />
              <input type="checkbox" onChange={(e) => handleChecked(todo.checked, todo.id)} />
              <button onClick={(e)=>handleDelete(todo.id)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
