import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Modal from './Modal'
import EditButton from './EdditButton'
import {
  todoAdd,
  // todoEdit
} from '../redux/actions/user'


class TodoList extends Component {
  state = {
    editting: false,
    editIndex: 0,
    taskText: '',
    mode: 'add', // add, edit
  }

  handleChange = e => {
    this.setState({
      taskText: e.target.value,
    })
  }
  handleAdd = e => {
    this.props.dispatch(todoAdd({
      text: this.state.taskText,
      completed: false,
      timestamp: Date.now(),
    }))
    this.setState({
      editting: false,
    })
  }
  
  // handleEdit = e => {
  //   this.props.dispatch(todoEdit())
  // }

  handleToggle = e => {
    console.log("toogle")
  }

  render () {
    return(
      <div className='app__body__todo'>
        <Modal showed={this.state.editting}>
          <textarea
            className='todo-input'
            value={this.state.taskText}
            onChange={this.handleChange}
            placeholder='Type here...'
            />
            <div className='todo-button-container'>
              <a
                className='button button--add-ok'
                onClick={
                  {
                    add: this.handleAdd,
                    edit: this.handleEdit
                  }[this.state.mode]
                }
                >
                OK
              </a>
              <a
                className='button button--add-cancel'
                onClick={e => {
                  this.setState({
                    editting: false,
                  })
                }}
                >
                CANCEL
              </a>
            </div>
        </Modal>
        <div className='todo-container'>
          {this.props.list.map((e, i) =>
            <div
              key={i}
              className='todo-item'
              >
              <p
                className={e.completed ? 'completed' : ''}
                >
                {e.text}
              </p>
              <EditButton
                handleEdit={e => {
                  this.setState({
                    editIndex: i,
                    editting: true,
                    mode: 'edit',
                    taskText: this.state.list[i].text
                  })
                }}
                handleDelete={e => {
                  this.props.dispatch()
                }}
                completed={e.completed}
                />
            </div>
          )}
        </div>
        <a
          className='button button--add'
          onClick={e => {
            this.setState({
              mode: 'add',
              editting: true,
            })
          }}
          >
          ADD TODO
        </a>
        {!this.props.uid ?
          <Redirect to='/' /> : null
        }
      </div>
    )
  }
}

export default connect(
  ({uid, list}) => ({uid, list})
)(TodoList)