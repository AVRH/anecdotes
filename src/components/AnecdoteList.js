import React from 'react';
import { vote } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification} from '../reducers/notificationReducer'

const AnecdoteList = ({store}) => {

  const {anecdotes, filter} = store.getState()

  const voteAnecdote = (id) => {
        store.dispatch(vote(id))
        const voteAnecdote = anecdotes.find( a => a.id === id)
        store.dispatch(changeNotification(`You voted: ${voteAnecdote.content} !`))
        setTimeout(() => {
          store.dispatch(removeNotification())
        }, 5000)
      }
  const sortAndFilter = (list) => {
    list.sort(function(a,b) {return a.votes < b.votes})
    list = list.filter(a=> a.content.toLowerCase().includes(filter.toLowerCase()))
    
    return list
    }

  return(
    <div>
    {sortAndFilter(anecdotes).map(anecdote =>
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