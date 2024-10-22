import Form from "@/Components/Form";
import TodoList from "@/Components/TodoList";

// Server Component
export default async function Home() {
  // Fetching todo data
  let fetchData = await fetch("http://localhost:3000/api/todo", {
    cache: "no-cache",
  });
  let jsonDataTodo = await fetchData.json();

  // Fetching user data (if needed)
  let fetchUser = await fetch("http://localhost:3000/api/user", {
    cache: "no-cache",
  });
  let jsonUser = await fetchUser.json();

console.log(jsonUser);

  
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-bold text-3xl">Todo App</h1>
      <Form allUsers={jsonUser}/>
      {/* Pass the fetched data to TodoList component */}
      {
        jsonDataTodo && jsonDataTodo.length > 0 ? (
          <TodoList todo={jsonDataTodo} />
        ) : (
          <p>Loading</p>
        )
      }
    </section>
  );
}
