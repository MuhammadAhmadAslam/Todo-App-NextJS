
import Box from "@/Components/Box";
import Form from "@/Components/form";
export default async function Home() {
  let todosApi = await fetch("http://localhost:3000/api/todo", {
    next: { revalidate: 0 }, // This ensures no caching (no static generation)
    cache: "no-store", // Prevents any caching of the response
  });
  todosApi = await todosApi.json();

  console.log(todosApi);

  
  return (
    <div>
    <h1 className="text-3xl text-center mt-[80px] font-bold">Todo Application NextJS</h1>
     <Form />
      <Box  todo={todosApi}/>
    </div>
  );
}
