import React from 'react';
import { addNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {

  const addAnecdote = event => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.addNew(anecdote)
    props.setNotification('New anecdotes succesfully added',5000)
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
  setNotification
}

export default connect(null,mapDispatchToProps)(AnecdoteForm)