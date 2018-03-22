import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import TodoList from './Components/TodoList'
import { userLogout } from './redux/actions/user'

const AuthBody = props =>
  <div className='app__body__auth'>
    <div className='button-container'>
      <Link to='/login' className='button button--login'>LOGIN</Link>
      <Link to='/register' className='button button--register'>REGISTER</Link>
    </div>
    {!props.uid ?
      <Redirect to='/' /> : null
    }
  </div>

class App extends Component {
  handleLogout = e => {
    this.props.dispatch(userLogout())
  }
  render() {
    return (
      <Router>
        <div className='app'>
          <div className='app__header'>
            <Link to='/'>
              <h1>My Todo App</h1>
            </Link>
            {this.props.uid ? 
              <a
                className='button button--logout'
                onClick={this.handleLogout}
                >
                LOGOUT
              </a> : null
            }
          </div>
          <div className='app__body'>
            <Route
              exact
              path='/'
              component={
                connect(({uid}) => ({uid}))(AuthBody)
              }
              />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/todo' component={TodoList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(({uid}) => ({uid}))(App)
