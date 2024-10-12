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
]

export async function GET() {  
       return Response.json({ data })
}