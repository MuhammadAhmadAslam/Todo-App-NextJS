"use client"

import { deleteToDoAction } from '@/action/action';
import React from 'react'
import { IoPencilSharp, IoTrashBinSharp } from "react-icons/io5";
const Box = ({todo}) => {

  let deleteToDo = async (id) => {
      console.log("delterd" , id)
      deleteToDoAction(id)
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
          <IoPencilSharp />
        </div>
      ))
    ) : (
      <p>No todos available</p> // Optional: you can show a fallback message here
    )}
  </div>
  )
}

export default Box