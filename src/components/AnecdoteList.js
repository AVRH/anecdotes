import React from 'react';
import { vote } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification} from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const voteAnecdote = (id) => {
        vote(id)
        const voteAnecdote = props.anecdotes.find( a => a.id === id)
        changeNotification(`You voted: ${voteAnecdote.content} !`)
        setTimeout(() => {
          removeNotification()
        }, 5000)
      }
  const sortAndFilter = (list) => {
    list.sort(function(a,b) {return a.votes < b.votes})
    list = list.filter(a=> a.content.toLowerCase().includes(props.filter.toLowerCase()))
    
    return list
    }

  return(
    <div>
    {sortAndFilter(props.anecdotes).map(anecdote =>
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
const mapStateToProps = (state) => {
  return({
    anecdotes: state.anecdotes,
    filter: state.filter
  })
}

const mapDispatchToProps = {
  vote,
  changeNotification,
  removeNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)