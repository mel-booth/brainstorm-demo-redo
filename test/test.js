import test from 'tape'
import freeze from 'deep-freeze'
import reducer from '../reducer'


test('testing Brainstorm-Democracy-V2', function (t) {
  t.ok(true)
  t.end()
})

test('ADD_IDEA adds an idea to list', function (t) {
  //arrange
  const state = {
    ideas: [
      { id: 1, details: 'Get a job', votes: 7 },
      { id: 2, details: 'Work, work, work, work, work', votes: 5 },
      { id: 3, details: 'Drink more coffee', votes: 3 }
    ]
  }

  const expected = {
    ideas: [
      { id: 1, details: 'Get a job', votes: 7 },
      { id: 2, details: 'Work, work, work, work, work', votes: 5 },
      { id: 3, details: 'Drink more coffee', votes: 3 },
      { id: 4, details: 'Meditate', votes: 4 }
    ]
  }

  const action = {type: 'ADD_IDEA', payload: { id: 4, details: 'Meditate', votes: 4 } }

  freeze(state)
  freeze(action)

  //act
  const actual = reducer(state, action)

  //assert
  t.deepEqual(actual, expected, "adds a bloomin' idea mate!")
  t.end()
})

test('INCREMENT_VOTE adds a vote to relevant idea', function (t) {
  const state = {
    ideas: [
      { id: 1, details: 'Get a job', votes: 7 },
      { id: 2, details: 'Work, work, work, work, work', votes: 5 },
      { id: 3, details: 'Drink more coffee', votes: 3 }
    ]
  }
  const expected = {
    ideas: [
      { id: 1, details: 'Get a job', votes: 8 },
      { id: 2, details: 'Work, work, work, work, work', votes: 5 },
      { id: 3, details: 'Drink more coffee', votes: 3 }
    ]
  }
  const action = {type: 'INCREMENT_VOTE', payload: {index: 1}}

  freeze(state)
  freeze(action)

  //act
  const actual = reducer (state,action)
  //assert
  t.deepEqual(actual, expected, "adds a bloomin' vote mate!")
  t.end()
})

test('DECREMENT_VOTE', function (t) {

})
