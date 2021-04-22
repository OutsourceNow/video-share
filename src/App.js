import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Reset from './components/Reset'
import Home from './components/Home'
import Employee from './components/Employee'
import { AuthProvider } from "./Auth"
import PrivateRoute from "./PrivateRoute"


function App() {
  return(
    <AuthProvider>
        <Router>
          <div className="App">
            <Switch>
              <PrivateRoute exact path="/Home" component={Home} />
              <Route exact path="/Employee" component={Employee} />
              <Route exact path="/" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Reset" component={Reset} />
            </Switch>
          </div>
        </Router>
    </AuthProvider>
  )
  
}

export default App;
