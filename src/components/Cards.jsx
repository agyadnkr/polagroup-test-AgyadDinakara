import axios from 'axios'
import React from 'react'

export default function Cards({ todo, deleteHandler }) {
  return (
    <div className='my-4 w-56 rounded-lg shadow-xl border py-4 px-6 bg-white'>
    <div>{todo.title}</div>
    <div>{todo.completed}</div>
    <button onClick={() => deleteHandler(todo.id)}>Delete</button>
  </div>
  )
}
