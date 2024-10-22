"use server"

import { revalidatePath } from "next/cache";

export async function addData(data){
       console.log(data , "data to be added")

       let obj ={
              todo: data.todo,
              isCompleted: false,
              user: data.userId
       }
       let addingData = fetch("http://localhost:3000/api/todo" , {
              method: 'POST',
              body: JSON.stringify(obj)
       })
       console.log("reuqest sent" , obj);
       revalidatePath("/")
}