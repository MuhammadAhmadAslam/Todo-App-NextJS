"use server";

import { revalidatePath } from "next/cache";

export async function action(formData) {
  let todoText = formData.get("todo");
  try {
    let fetchingTodo = await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      body: JSON.stringify({ todoText }),
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
  // console.log('todos' , Todos)
}