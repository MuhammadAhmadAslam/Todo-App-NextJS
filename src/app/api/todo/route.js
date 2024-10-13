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

export async function GET() {
  return Response.json(data);
}



export async function POST(request) {
  let newTodo = await request.json();
  let obj = {
    ...newTodo,
    id: data.length + 1,
  };
  data.push(obj);
  return Response.json(data);
}




export async function DELETE(request) {
  let deleteId = await request.json();
  let userTodoInd = data.findIndex((todo) => todo.id == deleteId.id)
  data.splice(userTodoInd, 1);
  return Response.json(data);
}
