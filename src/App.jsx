import React, { useState, useEffect } from 'react'
import Cards from './components/Cards';
import axios from "axios"
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodo = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos")
      setTodos(response.data)
      console.log(todos)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:3000/todos/${id}`)
  }

  useEffect(() => {
    fetchTodo()
  }, [])

  return (
    <div className="App">
      <div className="w-full min-h-screen bg-blue-500 flex flex-col items-center">
        <div className='mt-16'>
          TO DO LIST
        </div>
        <div className='w-1/2 h-full flex flex-col justify-center items-center'>
          <div className='w-full flex justify-center items-center mt-8'>
            <form>
              <label htmlFor="Add To Do">Add To Do</label>
              <input type="text" />
            </form>
          </div>
          <div>
            {todos.map(todo => <Cards todo={todo} key={todo.id} deleteHandler={deleteHandler} />)}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
