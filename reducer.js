import clone from 'clone'

function reducer (state, action) {
  const newState = clone(state)
  switch (action.type) {
    case 'ADD_IDEA':
      return newState
  }
    case 'INCREMENT_VOTE':
      return newState

    default:
    return newState

}

module.exports = reducer
