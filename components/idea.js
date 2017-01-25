import React, { Component } from 'react'


const Idea = (props) => {
  return (
    <ul>
      <li className='idea' onClick={() => props.dispatch({type: 'INCREMENT_VOTE', payload: props.index})}> <span id='votes'>{props.votes} </span>
      <span id='idea'>{props.details} </span>
      </li>
    </ul>
  )
}

export default Idea
