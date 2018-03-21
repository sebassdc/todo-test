import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { userLogin } from '../redux/actions/user'

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
  handleLogin = e => {
    const { email, password } = this.state
    this.props.dispatch(userLogin({
      email, password,
    }))
  }
  render() {
    return (
      <div className='app__body__login'>
        <div className='form-container'>
          <input
            value={this.state.email}
            name='email'
            onChange={this.handleChange}
            type='email'
            placeholder='Email'
          />
          <input
            value={this.state.password}
            name='password'
            onChange={this.handleChange}
            type='password'
            placeholder='Password'
          />
          <a
            className='button button--login'
            onClick={this.handleLogin}
            >
            LOGIN
          </a>
        </div>
        {this.props.uid ?
          <Redirect to='/todo'/> : null
        }
      </div>
    )
  }
}

export default connect(
  ({uid}) => ({uid})
)(Login)