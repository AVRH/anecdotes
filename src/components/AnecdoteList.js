import React from 'react';
import { vote } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification} from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const voteAnecdote = (id) => {
        props.vote(id)
        const voteAnecdote = props.anecdotes.find( a => a.id === id)
        props.changeNotification(`You voted: ${voteAnecdote.content} !`)
        setTimeout(() => {
          props.removeNotification()
        }, 5000)
      }
  

  return(
    <div>
    {props.anecdotesToShow.map(anecdote =>
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

const sortAndFilter = ({anecdotes, filter}) => {
  anecdotes.sort(function(a,b) {return a.votes < b.votes})
  anecdotes = anecdotes.filter(a=> a.content.toLowerCase().includes(filter.toLowerCase()))
  
  return anecdotes
}

const mapStateToProps = (state) => {
  return({
    anecdotesToShow: sortAndFilter(state)
  })
}

const mapDispatchToProps = {
  vote,
  changeNotification,
  removeNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)