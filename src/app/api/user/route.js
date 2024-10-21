
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


     export async function POST(request) {
       let data = await request.json();
       data.id = Math.floor(Math.random() * 1000000000);
       let obj = {
              user: data.user,
              id: data.id
       }
       data.push(obj);
       return new Response(data);
     }