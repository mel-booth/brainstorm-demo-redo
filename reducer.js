import clone from 'clone'

function reducer (state, action) {
  const newState = clone(state)

  switch (action.type) {
    case 'INIT':
      return newState

    case 'ADD_IDEA':
      let votes = newState.votes
      let ideas = newState.ideas
      if(!ideas.includes(action.payload)) {
        ideas.push(action.payload)
        return newState
    }
    case 'INCREMENT_VOTE':
      return newState

    default:
    return newState
  }

}

module.exports = reducer
