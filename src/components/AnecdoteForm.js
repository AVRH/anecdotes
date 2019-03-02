import React from 'react';
import { addNew } from '../reducers/anecdoteReducer'
import { changeNotification, removeNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    props.addNew(anecdote)
    event.target.anecdote.value = ''
    props.changeNotification('New anecdote has been added!')
    setTimeout( () => {
       props.removeNotification()
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


const mapDispatchToProps = {
  addNew,
  changeNotification,
  removeNotification
}

export default connect(null,mapDispatchToProps)(AnecdoteForm)