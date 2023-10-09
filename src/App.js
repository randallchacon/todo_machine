import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem'; //ctrl + space to import VSCode
import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
{text:'task 1', completed: true},
{text:'task 2', completed: false},
{text:'task 3', completed: false},
{text:'task 4', completed: true},
]


function App() {
  const[todos, setTodos] = React.useState(defaultTodos);
  const[searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('User looking for ' + searchValue);

  return (
    <React.Fragment>

      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo =>( //create an array from another one
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>
  );
}


export default App;
