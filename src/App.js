import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import TodoList from './features/TodoList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Redirect from="/" to="/todolist"/>
          <Route path="/todolist" component={TodoList}/>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
