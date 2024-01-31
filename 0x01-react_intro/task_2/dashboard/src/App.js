import logo from './holberton_logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" height="200px" />
        <h1>School dashboard</h1>
      </div>


      <br></br>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" placeholder="Email" />

        <br></br>

        <label for="password">Password:</label>
        <input type="text" id="password" name="password" placeholder="Password" />

        <br></br>
        <button>OK</button>

      </div>

      <div className='App-footer'>

        <p>Copyright 2020 - holberton School</p>

      </div>
    </div>
  );
}

export default App;
