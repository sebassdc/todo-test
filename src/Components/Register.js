import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userRegister } from '../redux/actions/user'
import { Redirect } from 'react-router-dom'

class Register extends Component {
  state = {
    email: '',
    password: '',
    repeatPassword: '',
    valid: true,
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleRegister = e => {
    const { email, password } = this.state
    if (this.state.password === this.state.repeatPassword) {
      this.props.dispatch(userRegister({
        email,
        password,
      }))
    }
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
          <span>
            {this.state.password === this.state.repeatPassword ?
              '' : 'password not matched'
            }
          </span>
          <a
            className='button button--login'
            onClick={this.handleRegister}
            >
            REGISTER
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
)(Register)