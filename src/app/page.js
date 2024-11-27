import { getAllUsers, getData } from "@/actions/formActions";
import Form from "@/Components/Form";
import TodoList from "@/Components/TodoList";

// Server Component
export default async function Home() {

  let jsonDataTodo
  try{
     jsonDataTodo = await getData();
  
    console.log(jsonDataTodo, "json data todo");
  }catch(e){
    console.log(e , "error agaya");
    return(
      <h1>Something went wrong</h1>
    )
  }
  
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-bold text-3xl">Todo App</h1>
      <Form />
      {/* Pass the fetched data to TodoList component */}
      {jsonDataTodo && jsonDataTodo.length > 0 ? (
        <TodoList todo={jsonDataTodo}  />
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
}
