"use client";
import { deleteData, updateData } from "@/actions/formActions";
import { DeleteIcon, PenIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

async function TodoList({ todo, jsonUser }) {
  let deleteTodo = async (id) => {
    deleteData(id);
  };

  const updateTodo = async (id, todo, userName, userId) => {
    await Swal.fire({
      title: "Update Todo",
      html: `
        <input type="text" id="todoInput" class="swal2-input" placeholder="Enter a todo" value="${todo}">
        <select id="userSelect" class="swal2-select">
          <option value="" disabled selected>Select User</option>
          ${jsonUser
            .map(
              (user) => `<option value="${user._id}">${user.userName}</option>`
            )
            .join("")}
        </select>
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: () => {
        const todoInput = document.getElementById("todoInput").value;
        const user = document.getElementById("userSelect").value;

        // Validation
        if (!todoInput || !user) {
          Swal.showValidationMessage("Please enter a todo and select a user");
          return;
        }

        // Make API call to update the todo
        // ...

        // Update the todo in the database
        let obj = {
          todo: todoInput,
          user: user,
          _id: id,
        };
        updateData(obj);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.value); // { todo: "Entered Todo", user: "Selected User" }
      }
    });
  };

  return (
    <div className="md:w-[60%] w-[100%] flex justify-center items-center gap-3 flex-col">
      {todo.map((item, index) => (
        <section
          key={item._id}
          className="w-[100%] min-h-[60px] px-3 py-3 flex justify-between items-center border border-black"
        >
          <article className="flex justify-center items-center">
            <p>
              {item.user.userName} : <span>{item.todo}</span>{" "}
              {/* Display the task */}
            </p>
          </article>
          <article className="flex justify-center items-center gap-4">
            <PenIcon
              onClick={() =>
                updateTodo(
                  item._id,
                  item.todo,
                  item.user.userName,
                  item.user._id
                )
              }
            />
            <DeleteIcon onClick={() => deleteTodo(item._id)} />
          </article>
        </section>
      ))}
    </div>
  );
}

export default TodoList;
