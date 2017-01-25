import React, { Component } from 'react'


const Idea = (props) => {
  return (
    <ul>
      <li>Votes: {props.votes}</li>
    </ul>
  )
}

const Ideas = (props) => {
  return (
    <div>
      {props.ideas.map((idea, index) => {
        return <Idea dispatch={props.dispatch} />
      })}
    </div>
  )
}
