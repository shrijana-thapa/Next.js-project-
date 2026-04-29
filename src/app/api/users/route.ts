import { users } from '@/lib/data/users';

export async function GET() {
        return Response.json(users);
    }

    export async function POST(req: Request) {
        const body = await req.json();

        if (!body.name || !body.email || !body.age) {
        return Response.json(
        { error: "Missing fields" },
        { status: 400 }
        );
        }

        const newUser = {
            id: Date.now(),
            name: body.name,
            email: body.email,
            age: body.age}
        users.push(newUser);
        return Response.json(newUser);
    }

    export async function DELETE(req:Request){
        const {id}= await req.json();

        
  if (!id) {
    return Response.json({ error: "ID required" }, { status: 400 });
  }

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  users.splice(index, 1);
        return Response.json({success: true});
    }

    export async function PUT(req: Request) {
        const { id, name, email, age } = await req.json();

         const user = users.find(u => u.id === id);

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  user.name = name;
  user.email = email;
  user.age = age;

        return Response.json({ success: true });
    }