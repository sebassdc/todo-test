import React, { Component } from 'react'

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
          <a className='button button--login'>LOGIN</a>
        </div>
      </div>
    )
  }
}

export default Login