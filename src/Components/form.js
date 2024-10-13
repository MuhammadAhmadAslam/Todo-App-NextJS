"use client"
import { action } from '@/action/action'
import React, { useRef } from 'react'

const ToDoForm = () => {

  let formRef = useRef(null)
  let submitData = async (formData) => {
      let todo = formData.get("todo")
      action(todo)
      formRef?.current?.reset()
  }


  return (
    <form action={submitData} ref={formRef} className='flex justify-center items-center flex-wrap container px-7 py-5 gap-3'>
       <input type="text" name='todo'  placeholder='Enter A To Do' className='border border-black w-[60%] placeholder:pl-4 pl-4  h-[47px] placeholder:font-bold'/>
       <input type='submit' value={"Add To Do"} />
    </form>
  )
}

export default ToDoForm