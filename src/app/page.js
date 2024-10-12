import Box from "@/Components/Box";
import Form from "@/Components/form";
import Image from "next/image";

export default async function Home() {

  let fetchData = await fetch("http://localhost:3000/api/todo")

  fetchData = await fetchData.json()
  console.log(fetchData);

  return (
    <section>
      <h1 className="text-center text-4xl font-normal mt-[80px]">To Do Application Next JS</h1>
      <Form />
      {
        fetchData.length > 0 ?
        fetchData.map((todo) => (
          <Box todo={todo.todo} />
        ))
        : null
      }
    </section>
  );
}
