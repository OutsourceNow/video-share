import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Reset from './components/Reset'
import Home from './components/Home'
import { AuthProvider } from "./Auth"


function App() {
  return(
    <AuthProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/Register" component={Register} />
              <Route path="/Reset" component={Reset} />
              <Route path="/Home" component={Home} />
            </Switch>
          </div>
        </Router>
    </AuthProvider>
  )
  
}

export default App;
