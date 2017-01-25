import React, { Component } from 'react'

const App = (props) => {
  return (
    <div>
      <h1 id='heading'>Brainstorm Democracy</h1>
      <div className='idea-input'>
      <input id='idea-input' type='text' placeholder='Enter your idea' />
      <button id='btn' type='submit' value='Submit' onClick={(e) => {
        props.dispatch({type:'ADD_IDEA', payload: {details: e.target.previousSibling.value, votes: 0}})
      }}>Submit Idea</button>
      </div>
    </div>
  )
}

export default App
