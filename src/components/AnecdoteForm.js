import React from 'react';
import { addNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({store}) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    store.dispatch(addNew(anecdote))
    event.target.anecdote.value = ''
  }
    return(
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
        <div>
        <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
      </div>
    )
}

export default AnecdoteForm