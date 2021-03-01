import React from 'react'
import './App.css';
import { Login, Register } from './components/login';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      isLogginActive: true,
    }
  }
    render() {
      const {isLogginActive} = this.state;
      return(
        <div className="App">
          <div className="Login">
            <div className="container">
              {isLogginActive && <Login containerRef={(ref) => this.current = ref}/>}
              {!isLogginActive && <Register containerRef={(ref) => this.current = ref}/>}
            </div>
          </div>
        </div>
      );
    }
  }

export default App;
