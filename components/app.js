import React, { Component } from 'react'

const App = (props) => {
  return (
    <div>
      <h1 id='heading'>Brainstorm Democracy</h1>
      <input id='idea' type='text' placeholder='Enter your idea' />
      <input className='btn' type='submit' value='Submit' onClick={(e) => {
        props.dispatch({type:'ADD_IDEA', payload: {details: document.getElementById('idea').value, votes: 0}})
      }} />
    </div>
  )
}

export default App
