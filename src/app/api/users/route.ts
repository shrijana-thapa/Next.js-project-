import { User } from '@/types/user';

let users: User[] = [
    {
      "id": 2,
      "name": "MAmta",
      "email": "gita@gmail.com",
      "age": 28
    },
    {
      "id": 3,
      "name": "Mamta",
      "email": "mamta@gamil.com",
      "age": 25
    },
    {
      "id": 4,
      "name": "Ramesh",
      "email": "ramesh@gmail.com",
      "age": 32
    },
    {
      "id": 5,
      "name": "Anita",
      "email": "anita@gmail.com",
      "age": 27
    },
    {
      "id": 6,
      "name": "Suresh",
      "email": "suresh@gmail.com",
      "age": 35
    },
    {
      "id": 7,
      "name": "Nabin",
      "email": "nabin@gmail.com",
      "age": 29
    },
    {
      "id": 8,
      "name": "Kritika",
      "email": "kritika@gmail.com",
      "age": 24
    },
    {
      "id": 9,
      "name": "Dipak",
      "email": "dipak@gmail.com",
      "age": 31
    },
    {
      "id": 10,
      "name": "Manisha",
      "email": "manisha@gmail.com",
      "age": 26
    },
    {
      "id": 11,
      "name": "Prakash",
      "email": "prakash@gmail.com",
      "age": 33
    },
    {
      "id": 12,
      "name": "Sunita",
      "email": "sunita@gmail.com",
      "age": 22
    },
    {
      "id": 13,
      "name": "Bikash",
      "email": "bikash@gmail.com",
      "age": 30
    }];

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
         return Response.json(
            { error: "ID required" },
            { status: 400 }
            );
        }

        users= users.filter(user=> user.id !== id );
        return Response.json({success: true});
    }

    export async function PUT(req: Request) {
        const { id, name, email, age } = await req.json();

            users = users.map((user) =>
            user.id === id ? { ...user, name, email, age } : user
        );

        return Response.json({ success: true });
    }