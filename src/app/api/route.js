import data from "@/db/data.json";

export async function GET() {
  return Response.json(data);
}
