"use server"

import { revalidatePath } from "next/cache";

export async function addData(data) {
  console.log(data, "data to be added");

  let obj = {
    todo: data.todo,
    isCompleted: false,
    user: data.userId,
  };

  let response = await fetch(`${process.env.BASE_URL}/api/todo`, {
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

export async function deleteData(id) {
  console.log(id, "id to be deleted")
  let deletingData = fetch(`${process.env.BASE_URL}/api/todo`, {
    method: 'DELETE',
    body: JSON.stringify(id),
    cache: 'no-cache'
  })
  console.log("reqest sent", id);
  revalidatePath("/")
}

// export async function updateData(obj){
//        console.log("data to be sent from form action to put reqeust", obj);

//        let updatingData = fetch(`${process.env.BASE_URL}/api/todo`, {
//               method: 'PUT',
//               body: JSON.stringify(obj),
//               cache: 'no-cache'
//        })

//        console.log("request sent" , updatedData);
//        revalidatePath("/")

//        return updatedData;
// }

// Assuming you are using Next.js API routes or Server Actions
export async function updateData(obj) {
  console.log("Data to be sent from form action to PUT request", obj);

  try {
    // Perform the PUT request
    const response = await fetch(`${process.env.BASE_URL}/api/todo`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Ensure you're sending JSON
      },
      body: JSON.stringify(obj),
      cache: 'no-cache',
    });

    if (response.ok) {
      const updatedTodo = await response.json();
      console.log("Updated Todo data:", updatedTodo);

      // Trigger revalidation of the page in Next.js to reflect updated data
      // Assuming you are using Next.js Incremental Static Regeneration (ISR)
      revalidatePath("/");  // This will trigger the revalidation of the page

      return updatedTodo;
    } else {
      console.error("Failed to update todo:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error during PUT request:", error);
    return null;
  }
}



export async function getData() {
  let data = await fetch(`${process.env.BASE_URL}/api/todo`, {
    method: 'GET',
    cache: 'no-cache'
  })
  return data.json();
}

export async function getAllUsers() {
  let data = await fetch(`${process.env.BASE_URL}/api/user`, {
    method: 'GET'
  })
  return data.json();
}