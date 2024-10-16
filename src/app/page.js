
// import Box from "@/Components/Box";
// import Form from "@/Components/form";
// export default async function Home() {
//   let todosApi = await fetch("http://localhost:3000/api/todo");
//   todosApi = await todosApi.json();

import Box from "@/Components/Box";
import ToDoForm from "@/Components/form";
export default async function Home() {
  try {
    let todosApi = await fetch("http://localhost:3000/api/todo" , {
      cache: "no-cache"
    });
    if (!todosApi.ok) {
      throw new Error(`HTTP error! status: ${todosApi.status}`);
    }
    todosApi = await todosApi.json();

    console.log(todosApi);

    return (
      <div className="container mx-auto">
        <h1 className="text-3xl text-center mt-[80px] font-bold">Todo Application NextJS</h1>
        <ToDoForm />
        <Box todo={todosApi} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching todos:", error);
    return (
      <div>
        <h1>Error loading todos. Please try again later.</h1>
      </div>
    );
  }
}
