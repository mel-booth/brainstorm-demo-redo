import React, { Component } from 'react'


const Idea = (props) => {
  return (
    <ul>
      <li className='idea' onClick={() => props.dispatch({type: 'INCREMENT_VOTE', payload: props.index})}> {props.details}
      <span id='votes'>{props.votes} </span></li>
    </ul>
  )
}

export default Idea
