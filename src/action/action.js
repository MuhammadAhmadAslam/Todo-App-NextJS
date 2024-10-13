"use server";

import { revalidatePath } from "next/cache";

export async function action(todo) {
  try {
    let fetchingTodo = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      body: JSON.stringify({ todo }),
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}


export async function deleteToDoAction(id){
        try{
          let fetchToDo = fetch("http://localhost:3000/api/todo" , {
              method: "DELETE",
              body: JSON.stringify({ id })
          })
          console.log("delete request chali gaye hae");
          revalidatePath("/")
        }catch(e){
            console.log(e);
        }
}