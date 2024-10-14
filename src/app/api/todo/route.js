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
  let userTodoInd = data.findIndex((todo) => todo.id == deleteId.id);
  data.splice(userTodoInd, 1);
  return Response.json(data);
}


  export async function PUT(request) {
    // Await the result of request.json()
    let editData = await request.json(); 
    console.log(editData.todo, "yae request aye frontend sae");
    
    // Find the index of the todo item to update
    let userTodoInd = data.findIndex((todo) => todo.id == editData.id);
    console.log(userTodoInd, "userTodoInd");

    if (userTodoInd !== -1) {
        // Update the todo item if the index is found
        data[userTodoInd].todo = editData.todo;
    }

    console.log("yae request jae gae" , data);
    

    return Response.json(data);
}



