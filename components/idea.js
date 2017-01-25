import React, { Component } from 'react'


const Idea = (props) => {
  return (
    <ul>
      <li onClick={() => props.dispatch({type: 'INCREMENT_VOTE', payload: props.index})}>Idea: {props.details} Votes: {props.votes}</li>
    </ul>
  )
}

export default Idea
