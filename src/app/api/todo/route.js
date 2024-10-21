import { connectDB } from "@/lib/dbConnect"; // Assuming this is for database connection
import { TodoModal } from "@/lib/TodoModal";

let data = [
  {
    task: "123",
    completed: false
  }
];

// GET method to fetch data
export async function GET(request) {
  await connectDB()
  let todos = await TodoModal.find()
  console.log(todos , "data base sae data agayae");
  
  return Response.json(todos);
}