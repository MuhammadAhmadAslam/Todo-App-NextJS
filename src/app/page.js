import Form from "@/Components/Form";
import TodoList from "@/Components/TodoList";

export default async function Home() {
      return(
        <section className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="font-bold  text-3xl">Todo App</h1>
        <Form />
        <TodoList />
        </section>
      )
}
