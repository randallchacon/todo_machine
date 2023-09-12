import logo from './react.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <ToDoItem/>
      <ToDoItem/>
      <ToDoItem/>

      <header className="App-header">
        <h1>React Base App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit the <code>src/App.js</code> file and save to reload
        </p>
        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"          
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function ToDoItem(){
  return(
    <li>
      <span>V</span>
      <p>Task 1</p>
      <span>X</span>
    </li>
  );
}

export default App;
