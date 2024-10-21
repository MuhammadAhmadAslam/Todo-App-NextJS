"use client";
import { DeleteIcon, PenIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

function TodoList({ todo }) {
  return (
    <div className="md:w-[60%] w-[100%] flex justify-center items-center gap-3 flex-col">
      {todo.map((item, index) => (
        <section key={item._id} className="w-[100%] min-h-[60px] px-3 py-3 flex justify-between items-center border border-black">
          <article className="flex justify-center items-center">
            <p>
              UserName: <span>{item.todo}</span> {/* Display the task */}
            </p>
          </article>
          <article className="flex justify-center items-center gap-4">
            <PenIcon />
            <DeleteIcon />
          </article>
        </section>
      ))}
    </div>
  );
}

export default TodoList;
