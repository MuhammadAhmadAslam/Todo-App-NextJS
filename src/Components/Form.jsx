"use client";
import { addData } from "@/actions/formActions";
import React, { useRef, useState } from "react";

function Form({ allUsers }) {
  let [selectedUser, setSelectedUser] = useState(allUsers[0]._id);
  let formRef = useRef(null);
  let handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the page reload
    const formData = new FormData(event.target); // Get the form data
    addData({ userId: selectedUser, todo: formData.get("todo") });
    console.log("clicked", formData.get("todo") , selectedUser); // Access the value of the input named 'todo'
    formRef?.current?.reset();
  };

  return (
    <div className="mt-8 w-[100%] mb-5">
      <form
        ref={formRef}
        onSubmit={handleSubmit} // Use onSubmit instead of action
        className="flex justify-center items-center gap-2 flex-wrap w-[100%]"
      >
        <input
          type="text"
          placeholder="Enter A Todo"
          name="todo"
          className="border border-black h-[40px] p-3 md:w-[50%]"
        />
        <select
          name=""
          id=""
          className="px-3 py-3"
          value={selectedUser}
          onChange={(event) => setSelectedUser(event.target.value)}
        >
          <option value="" disabled selected>
            Select User
          </option>
          {allUsers.map((user) => (
            <option key={user._id} value={user._id}>
              {user.userName}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value={"Add Todo"}
          className="border border-black px-4 py-2"
        />
      </form>
    </div>
  );
}

export default Form;
