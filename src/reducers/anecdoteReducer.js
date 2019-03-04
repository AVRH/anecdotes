import anecdoteService from '../services/anecdotes'

export const vote = (anecdote) => {
  return async dispatch => {
    const anecdoteToVote = {
      content: anecdote.content,
      id: anecdote.id,
      votes: anecdote.votes +1 
    }
    const votedAnecdote = await anecdoteService.changeVotes(anecdoteToVote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export const addNew = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'ADD_NEW',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      return state.map(a => a.id === action.data.id ? action.data : a)
    case 'ADD_NEW':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: 
      return state
  }
}

export default reducer