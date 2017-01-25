import React, { Component } from 'react'

const App = (props) => {
  return (
    <div>
      <h1 id='heading'>Brainstorm Democracy</h1>
      <input type='text' placeholder='Enter your idea' />
      <input className='btn' type='submit' value='Submit' />
    </div>
  )
}

export default App
