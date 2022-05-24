import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'omkar',
    }; 
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello {this.state.name}
        </p>
        <button 
        onClick={() => {
          this.setState({ name: 'ok' })
        }}
        >
        change name
        </button>
        <p>hh</p>
      </header>
    </div>
  );
}
}
export default App;
