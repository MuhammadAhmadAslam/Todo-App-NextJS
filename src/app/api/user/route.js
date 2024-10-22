import { connectDB } from "@/lib/dbConnect";
import {  UserModel } from "@/lib/UserModal";

let data = [
  {
    user: "Ahmed",
    id: 1,
  },
];

export async function GET(request) {
  await connectDB();
  let users = await UserModel.find();
  return  Response.json(users);
}

export async function POST(request) {
  try {
    let dataFromFrontEnd = await request.json();
    console.log(dataFromFrontEnd, "from front end");
    let newUser = new UserModel({...dataFromFrontEnd });
    await newUser.save();
    return new Response(dataFromFrontEnd, { status: 200 });
  } catch (error) {
      return Response.json({ message: "Failed to add user", error }, { status: 500 });
  }
}
