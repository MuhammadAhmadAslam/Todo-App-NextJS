import Form from "@/Components/Form";
import TodoList from "@/Components/TodoList";

// Server Component
export default async function Home() {
  const baseUrl = process.env.BASE_URL || "http://localhost:3000/api/todo";
  const baseUrl2 = process.env.BASE_URL_2 || "http://localhost:3000/api/user";

  let fetchData = await fetch(baseUrl, { cache: "no-cache" });
  let jsonDataTodo = await fetchData.json();

  let fetchUser = await fetch(baseUrl2, { cache: "no-cache" });
  let jsonUser = await fetchUser.json();

  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-bold text-3xl">Todo App</h1>
      <Form allUsers={jsonUser} />
      {/* Pass the fetched data to TodoList component */}
      {jsonDataTodo && jsonDataTodo.length > 0 ? (
        <TodoList todo={jsonDataTodo} jsonUser={jsonUser} />
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
}
