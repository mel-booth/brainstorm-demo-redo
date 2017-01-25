import clone from 'clone'

function reducer (state, action) {
  const newState = clone(state)
  let votes = newState.votes
  let ideas = newState.ideas

  switch (action.type) {
    case 'INIT':
      return newState

    case 'ADD_IDEA':
      if(!ideas.includes(action.payload)) {
        ideas.push(action.payload)
        return newState
    }
    case 'INCREMENT_VOTE':
    console.log(action.payload);
      ideas[action.payload].votes++
      return newState

    default:
    return newState
  }

}

module.exports = reducer
