import React, { Component } from 'react'
import TimeAgo from 'timeago-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import Modal from './Modal'
import EditButton from './EdditButton'
import {
  todoEdit,
  todoToogle,
  todoDelete,
} from '../redux/actions/user'


class TodoList extends Component {
  state = {
    editting: false,
    editKey: null,
    taskText: '',
    mode: 'add', // add, edit
  }

  handleChange = e => {
    this.setState({
      taskText: e.target.value,
    })
  }
  
  handleEdit = e => {
    if (this.state.taskText) {
      const task = {
        text: this.state.taskText,
        timestamp: Date.now(),
        completed: false,
        key: this.state.editKey
      }
      this.props.dispatch(todoEdit(task))
      this.setState({
        editting: false,
        taskText: '',
      })
    }
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
                onClick={this.handleEdit}
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
        <TransitionGroup className='todo-container'>
          {this.props.list.map((item, i) =>
            <CSSTransition
              timeout={400}
              key={item.key}
              classNames='todo-item'
              >
              <div className='todo-transition-container'>
                <div className='todo-item__content'>
                  <p
                    className={item.completed ? 'completed' : ''}
                    >
                    {item.text}
                  </p>
                  <TimeAgo
                    className='todo_item__timeago'
                    datetime={item.timestamp}/>
                </div>
                <EditButton
                  handleEdit={e => {
                    this.setState({
                      editKey: item.key,
                      editting: true,
                      mode: 'edit',
                      taskText: this.props.list[i].text
                    })
                  }}
                  handleDelete={e => {
                    this.props.dispatch(todoDelete(item.key))
                  }}
                  handleToogle={e => {
                    const { key, completed } = item
                    this.props.dispatch(todoToogle({
                      key,
                      completed,
                    }))
                  }}
                  completed={item.completed}
                  />
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
        <a
          className='button button--add'
          onClick={e => {
            e.preventDefault()
            this.setState({
              editting: true,
              editKey: null,
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