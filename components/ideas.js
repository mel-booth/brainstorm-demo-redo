import React, { Component } from 'react'
import Idea from './idea'

const Ideas = (props) => {
  return (
    <div>
      {props.ideas.map((idea, index) => {
        return <Idea dispatch={props.dispatch} details={idea.details} votes={idea.votes} index={index} />
      })}
    </div>
  )
}

export default Ideas
