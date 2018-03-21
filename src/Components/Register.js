import React, { Component } from 'react'

class Register extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className='app__body__register'>
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
          <input
            value={this.state.repeatPassword}
            name='repeatPassword'
            onChange={this.handleChange}
            type='password'
            placeholder='Repeat Password'
          />
          <a className='button button--login'>LOGIN</a>
        </div>
      </div>
    )
  }
}

export default Register