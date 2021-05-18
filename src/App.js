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
import List from './components/List';
import EditUser from './components/EditUser';
import EmployeeCharts from './components/EmployeeCharts';


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
              <Route exact path="/List"  component={List} />
              <Route exact path="/EditUser/:_id" component={EditUser}/>
              <Route exact path="/EmployeeCharts" component={EmployeeCharts}/>
            </Switch>
          </div>
        </Router>
    </AuthProvider>
  )
  
}

export default App;
