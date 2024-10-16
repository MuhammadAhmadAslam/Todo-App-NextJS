// "use client";

// import { deleteToDoAction, editToDoAction } from "@/action/action";
// import React from "react";
// import { IoPencilSharp, IoTrashBinSharp } from "react-icons/io5";
// import Swal from "sweetalert2";

// const Box = ({ todo }) => {
//   let deleteToDo = async (id) => {
//     console.log("deleted", id);
//     deleteToDoAction(id);
//   };

//   let edit = async (value, id) => {
//     const { value: updatedValue } = await Swal.fire({
//       title: "Edit ToDo",
//       input: "text",
//       inputLabel: "Update your ToDo item",
//       inputValue: value,
//       showCancelButton: true,
//       cancelButtonText: "Cancel",
//       confirmButtonText: "Edit",
//       inputValidator: (value) => {
//         if (!value) {
//           return "You need to write something!";
//         }
//       },
//     });

//     if (updatedValue) {
//       let obj = { todo: updatedValue, id: id };
//       editToDoAction(updatedValue, id);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center container">
//       <div className="grid grid-cols-1 gap-3">
//         {Array.isArray(todo) && todo.length > 0 ? (
//           todo.map((data) => (
//             <div
//               className="flex justify-between items-center p-3 border border-black w-80 gap-5"
//               key={data._id}
//             >
//               <div>{data.todo}</div>
//               <div className="flex gap-3">
//                 <IoTrashBinSharp
//                   onClick={() => deleteToDo(data._id)}
//                   cursor={"pointer"}
//                 />
//                 <IoPencilSharp onClick={() => edit(data.todo, data._id)} />
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No todos available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Box;


"use client";

import { deleteToDoAction, editToDoAction } from "@/action/action";
import React from "react";
import { IoPencilSharp, IoTrashBinSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const Box = ({ todo }) => {
  let deleteToDo = async (id) => {
    try {
      // Confirmation popup before deletion
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      });

      if (result.isConfirmed) {
        console.log("Deleted:", id);
        await deleteToDoAction(id); // Ensure action is correctly handling the `id`
        Swal.fire('Deleted!', 'Your ToDo has been deleted.', 'success');
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  let edit = async (value, id) => {
    const { value: updatedValue } = await Swal.fire({
      title: "Edit ToDo",
      input: "text",
      inputLabel: "Update your ToDo item",
      inputValue: value,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Edit",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (updatedValue) {
      let obj = { todo: updatedValue, id: id };
      editToDoAction(updatedValue, id);
    }
  };

  return (
    <div className="flex justify-center items-center container">
      <div className="grid grid-cols-1 gap-3">
        {Array.isArray(todo) && todo.length > 0 ? (
          todo.map((data) => (
            <div
              className="flex justify-between items-center p-3 border border-black w-80 gap-5"
              key={data._id}
            >
              <div>{data.todo} <br />
              {data._id}
              </div>
              <div className="flex gap-3">
                <IoTrashBinSharp
                  onClick={() => deleteToDo(data._id)} // Make sure to pass the correct id
                  cursor={"pointer"}
                />
                <IoPencilSharp onClick={() => edit(data.todo, data._id)} />
              </div>
            </div>
          ))
        ) : (
          <p>No todos available</p>
        )}
      </div>
    </div>
  );
};

export default Box;
