import { connectDB } from "@/lib/dbConnect"; // Assuming this is for database connection
import { TodoModal } from "@/lib/TodoModal";

let data = [
  {
    task: "123",
    completed: false,
  },
];

// GET method to fetch data
export async function GET(request) {
  await connectDB();
  let todos = await TodoModal.find().populate("user", "email");
  return Response.json(todos);
}

export async function POST(request) {
  try {
    let data = await request.json();
    console.log(data, "data to be saved in db");
    const newTodo = new TodoModal({...data});
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
