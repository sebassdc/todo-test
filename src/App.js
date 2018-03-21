import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import TodoList from './Components/TodoList'

const AuthBody = props =>
  <div className='app__body__auth'>
    <div className='button-container'>
      <a className='button button--login'>LOGIN</a>
      <a className='button button--register'>REGISTER</a>
    </div>
  </div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <div className='app__header'>
            <h1>My Todo App</h1>
          </div>
          <div className='app__body'>
            <Route exact path='/' component={AuthBody} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/todo' component={TodoList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
