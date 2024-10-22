"use server"

import { revalidatePath } from "next/cache";

export async function addData(data) {
  console.log(data, "data to be added");

  let obj = {
    todo: data.todo,
    isCompleted: false,
    user: data.userId,
  };

  let response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  let addedTodo = await response.json(); // Assuming the API returns the new todo item

  console.log("request sent", addedTodo);

  revalidatePath("/");

  return addedTodo; // Return the added data
}

export async function deleteData(id){
       console.log(id , "id to be deleted")
       let deletingData = fetch(`http://localhost:3000/api/todo` , {
              method: 'DELETE',
              body: JSON.stringify(id)
       })
       console.log("reqest sent" , id);  
       revalidatePath("/")    
}

export async function updateData(id, data){
       console.log(id , "id to be updated" , data , "data to be updated");
       let obj = {
              todo: data.todo,
              user: data.userId,
              _id: id
       }
       console.log(obj, "data to be sent for update"  );
       
       let updatingData = fetch(`http://localhost:3000/api/todo`, {
              method: 'PUT',
              body: JSON.stringify({obj})
       })
}