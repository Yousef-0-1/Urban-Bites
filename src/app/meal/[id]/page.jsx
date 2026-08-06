import MealDetails from "@/components/MealDetails";
import Image from "next/image";
export default async function MealPage({ params }) {
  const { id } = await params;
  const meal = await fetch(`http://localhost:3000/api/meal/${id}`).then((res) =>
    res.json(),
  );

  if (!meal) {
    return <div>Loading...</div>;
  }
  return (
    <section className="container py-12 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-red-500">
        Meal Details
      </h1>

      <MealDetails meal={meal} />
    </section>
  );
}
