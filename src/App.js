import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return(
      <div className='app__body__login'>
        <div className='form-container'>
          <input
            value={this.state.email}
            name='email'
            onChange={this.handleChange}
            type='email'
            placeholder='email'
            />
          <input
            value={this.state.password}
            name='password'
            onChange={this.handleChange}
            type='password'
            placeholder='password'
            />
          <a className='button button--login'>LOGIN</a>
        </div>
      </div>
    )
  }
}

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
          <header className='app__header'>
            <h1>My Todo App</h1>
          </header>
          <div className='app__body'>
            <Route exact path='/' component={AuthBody} />
            <Route exact path='/login' component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
