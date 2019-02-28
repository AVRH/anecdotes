import React from 'react';
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = (props) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm store={props.store} />
      <Notification store={props.store} />
      <AnecdoteList store={props.store} />
    </div>
  )
}

export default App
