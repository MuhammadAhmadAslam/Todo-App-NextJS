import { connectDB } from "../../../../lib/dbConnect";
import { TodoModal } from "../../../../lib/todoModal";

let data = [
  {
    todo: "Task 1",
    id: 1,
  },
  {
    todo: "Task 2",
    id: 2,
  },
  {
    todo: "Task 3",
    id: 3,
  },
  {
    todo: "Task 4",
    id: 4,
  },
];

export async function GET(request) {
  await connectDB();
  let todo = await TodoModal.find();
  return Response.json(todo);
}

export async function POST(request) {
  let todo = await request.json();
  console.log(todo.todo , "yae request aye frontend sae");
  
  let todoObj = await new TodoModal({
    todo: todo.todo,
    isCompleted: false
  });
  // console.log(newTodo.todo , "yae new todo.todo");
  
  await todoObj.save();
  console.log(todoObj , "todoobj");
  
  return Response.json({todo});
}

export async function DELETE(request) {
  let deleteId = await request.json();
  console.log("deleted id from front end" , deleteId);
  await TodoModal.deleteOne({id : deleteId._id})
  return Response.json(data);
}

export async function PUT(request) {
  // Await the result of request.json()
  let editData = await request.json();
  console.log(editData, "yae request aye frontend sae");

 let todo = await TodoModal.updateOne({id : editData._id}, {todo: editData.todo})
  console.log(await todo , "yae request chalae gae");
  
  return Response.json(todo);
}
