"use client"
import { DeleteIcon, PenIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function TodoList() {
  let [todos, setTodo] = useState([])

  let fetchingTodos = async () => {
    try {
      let fetchData = await fetch("http://localhost:3000/api/todo");
      let jsonData = await fetchData.json(); // Parse the response as JSON
      setTodo(jsonData); // Set the fetched data
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchingTodos();
  }, [])

  return (
    <div className='md:w-[60%] w-[100%]'>
      {todos.map((item) => (
        <section
          key={item.task} // Add a unique key
          className="w-[100%] min-h-[60px] px-3 py-3 flex justify-between items-center border border-black"
        >
          <article className="flex justify-center items-center">
            <p>
              UserName: <span>{item.todo}</span> {/* Display the task */}
            </p>
          </article>
          <article className="flex justify-center items-center gap-4">
            <PenIcon />
            <DeleteIcon />
          </article>
        </section>
      ))}
    </div>
  )
}

export default TodoList
