import { users } from '@/lib/data/users';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string  } }
) {
   const { id } = await params;
  const userId = Number(id);  
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const body = await req.json();

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }

  users[index] = {
    ...users[index],
    ...body,
  };

  return NextResponse.json(users[index]);
}