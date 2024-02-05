export async function GET() {
  try {
    const res = await fetch('http://host.docker.internal:3003/api/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
