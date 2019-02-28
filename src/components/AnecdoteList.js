import React from 'react';
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({store}) => {

  const anecdotes = store.getState().anecdotes

  const voteAnecdote = (id) => {
        store.dispatch(vote(id))
      }
  const sort = (list) => {
    list.sort(function(a,b) {return a.votes < b.votes})
    return list
    }

  return(
    <div>
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
    </div>
  )
}

export default AnecdoteList