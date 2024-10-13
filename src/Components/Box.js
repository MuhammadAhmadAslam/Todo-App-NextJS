"use client"

import { deleteToDoAction } from '@/action/action';
import React from 'react'
import { IoPencilSharp, IoTrashBinSharp } from "react-icons/io5";
import Swal from 'sweetalert2';
const Box = ({todo}) => {

  let deleteToDo = async (id) => {
      console.log("delterd" , id)
      deleteToDoAction(id)
  }


  let edit = async (value) => {
    const { value: updatedValue } = Swal.fire({
      title: 'Edit ToDo',
      input: 'text',
      inputLabel: 'Update your ToDo item',
      inputValue: value,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        }
      }
    });

    if (updatedValue) {
        
    }
        
  }
  return (
    <div className="flex justify-center flex-col items-center gap-3">
    {Array.isArray(todo) && todo.length > 0 ? (
      todo.map((data) => (
        <div
          className="flex justify-center items-center p-3 border border-black w-1/3 gap-5"
          key={data.id}
        >
          {data.todo}
          <IoTrashBinSharp  onClick={() => deleteToDo(data.id)} cursor={"pointer"}/>
          <IoPencilSharp  onClick={() => edit(data.todo)}/>
        </div>
      ))
    ) : (
      <p>No todos available</p> // Optional: you can show a fallback message here
    )}
  </div>
  )
}

export default Box