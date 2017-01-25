import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducer'
import App from './components/app'
import Ideas from './components/ideas'

const initialState = {
  ideas: [
    {
      id: 1, details: 'Get a job', votes: 7
    },
    {
      id: 2, details: 'Work, work, work, work, work', votes: 5
    },
    {
      id: 3, details: 'Drink more coffee', votes: 3
    }
  ]
}

const store = createStore(reducer, initialState)

const main = document.querySelector('main')

store.subscribe(() => {
  const state = store.getState()
  render(
    <div>
      <App state={state} dispatch={store.dispatch} />
      <Ideas ideas={state.ideas} dispatch={store.dispatch} />
    </div>,
    main)
})

store.dispatch({type: 'INIT'})
