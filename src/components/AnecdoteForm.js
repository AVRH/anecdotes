import React from 'react';
import { addNew } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({store}) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    store.dispatch(addNew(anecdote))
    event.target.anecdote.value = ''
    store.dispatch(changeNotification('New anecdote has been added!'))
    setTimeout( () => {
       store.dispatch(removeNotification())
    }, 5000
    )
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