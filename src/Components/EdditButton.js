import React, { Component } from 'react'


export default class extends Component {
  state = {
    showed: false
  }

  toogle = e => {
    this.setState({
      showed: !this.state.showed
    })
  }

  render () {
    return(
      <div
        onClick={this.toogle}
        className='edit-button'
        >
        <div className={`edit-container ${this.state.showed ? 'showed' : ''}`}>
          <div className='edit-menu'>
            <a
              onClick={e => {
                this.toogle()
                this.props.handleEdit()
              }}
              className='edit-menu-edit'
              >
              Edit
            </a>
            <a
              onClick={e => {
                this.toogle()
                this.props.handleDelete()
              }}
              className='edit-menu-delete'
              >
              Delete
            </a>
            <a
              onClick={e => {
                this.toogle()
                this.props.handleToogle()
              }}
              className='edit-menu-complete'
              >
              {!this.props.completed ? 'Complete' : 'Uncomplete'}
            </a>
          </div>
        </div>
        <div className='edit-button-circle'/>
        <div className='edit-button-circle'/>
        <div className='edit-button-circle'/>
        
      </div>
    )
  }
}