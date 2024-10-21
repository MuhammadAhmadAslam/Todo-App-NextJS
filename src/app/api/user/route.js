
let data = [
       {
              user: "Ahmed",
              id:1
       }
]

export async function GET(request) {
       return new Response(JSON.stringify(data), {
         status: 200,
         headers: { 'Content-Type': 'application/json' }
       });
     }