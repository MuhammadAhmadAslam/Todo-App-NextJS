import { action } from '@/action/action'
import React from 'react'

const ToDoForm = () => {
  return (
    <form action={action}  className='flex justify-center items-center flex-wrap container px-7 py-5 gap-3'>
       <input type="text" name='todo'  placeholder='Enter A To Do' className='border border-black w-[60%] placeholder:pl-4 pl-4  h-[47px] placeholder:font-bold'/>
       <button className='border border-black px-4 py-3'>Add To Do</button>
    </form>
  )
}

export default ToDoForm