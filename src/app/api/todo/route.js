import { connectDB } from "@/lib/dbConnect"; // Assuming this is for database connection
import { TodoModel } from "@/lib/TodoModal";

let data = [
  {
    task: "123",
    completed: false,
  },
];

// GET method to fetch data
export async function GET(request) {
  await connectDB();
  let todos = await TodoModel.find()
  return Response.json(todos);
}

export async function POST(request) {
  try {
    let data = await request.json();
    const newTodo = new TodoModel({...data});
    console.log(newTodo, "data to be saved in db");
    await newTodo.save();
    return new Response(
      JSON.stringify({ message: "Task added successfully", data }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving data:", error);
    return new Response(
      JSON.stringify({ message: "Failed to add task", error }),
      { status: 500 }
    );
  }
}


export async function DELETE(request) {
  let data = await request.json();
  console.log("data from delete request" , data);
  const todo = await TodoModel.deleteOne({_id: data});
  return new Response(
    JSON.stringify({ message: "Task deleted successfully", data }),
    { status: 200 }
  );
}


export async function PUT(request) {
  let data = await request.json();
  console.log("data from put request" , data);
  const todo = await TodoModel.updateOne({_id: data._id}, {...data});
  return Response.json({
    todo,
    msg: "Todos Updated Successfully",
  });
}