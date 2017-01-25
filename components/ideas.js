import React, { Component } from 'react'
import Idea from './idea'

export const Ideas = (props) => {
  return (
    <div>
      {props.ideas.map((idea, index) => {
        return <Idea dispatch={props.dispatch} />
      })}
    </div>
  )
}
