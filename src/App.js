import React from 'react';
import {vote, addNew} from './reducers/anecdoteReducer'

const App = (props) => {
  const store = props.store
  const anecdotes = store.getState()
  
  const voteAnecdote = (id) => {
    store.dispatch(vote(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    store.dispatch(addNew(anecdote))
    event.target.anecdote.value = ''
  }
  const sort = (list) => {
    list.sort(function(a,b) {return a.votes < b.votes})
    return list
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {sort(anecdotes).map(anecdote =>
        <div key={anecdote.id} >
          <div className='anecdote'>
            {anecdote.content}
          </div>
          <div clasName='vote'>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
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

export default App
