import React, { Component } from 'react'


const Idea = (props) => {
  return (
    <ul>
      <li>Idea: {props.details} Votes: {props.votes}</li>
    </ul>
  )
}

export default Idea
