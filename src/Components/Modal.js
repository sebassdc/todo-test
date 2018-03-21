import React from 'react'

export default ({className, children}) =>
  <div className='modal-container'>
    <div className={`modal ${className}`}>
      {children}
    </div>
  </div>