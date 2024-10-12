import { action } from "@/action/action";
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
      <div className="flex justify-center flex-col items-center gap-3">
        {Array.isArray(todosApi) && todosApi.length > 0 ? (
          todosApi.map((data) => (
            <div
              className="flex justify-center items-center p-3 border border-black w-1/3"
              key={data.id}
            >
              {data.todo}
            </div>
          ))
        ) : (
          <p>No todos available</p> // Optional: you can show a fallback message here
        )}
      </div>
    </div>
  );
}
