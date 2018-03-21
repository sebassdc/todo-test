import React, { Component } from 'react'
import Modal from './Modal'

class TodoList extends Component {
  state = {
    list: []
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        list: [
          {
            text: 'buy milk',
            completed: false,
            timestamp: Date.now(),
          },
          {
            text: 'repair the car',
            completed: false,
            timestamp: Date.now(),
          },
          {
            text: 'call mom',
            completed: false,
            timestamp: Date.now(),
          },
        ]
      })
    }, 500)
  }

  render () {
    return(
      <div className='app__body__todo'>
        <Modal>
          <textarea
            className='todo-input'
            placeholder='Type here...'
            />
            <a className='button button--add-ok'>
              OK
            </a>
        </Modal>
        <div className='todo-container'>
          {this.state.list.map((e, i) =>
            <div
              key={i}
              className='todo-item'
              >
              <span>{e.text}</span>
            </div>
          )}
        </div>
        <a className='button button--add'>ADD TODO</a>
      </div>
    )
  }
}

export default TodoList