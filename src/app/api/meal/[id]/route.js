import data from "@/db/data.json";
export async function GET(request, { params }) {
  const { id } = await params;
  const meal = data.find((m) => String(m.id) === String(id));
  if (!meal) {
    return new Response(JSON.stringify({ error: "Meal not found" }));
  }
  return Response.json(meal);
}
