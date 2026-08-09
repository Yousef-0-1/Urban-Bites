import MealDetails from "@/components/MealDetails";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
export default async function MealPage({ params }) {
  const { id } = await params;
  const meal = await prisma.meals.findUnique({
    where: { id: Number(id) },
    include: {
      categories: true,
    },
  });
  const formattedMeals = {
    ...meal,
    rating: Number(meal.rating),
  };
  if (!meal) {
    notFound();
  }
  if (!meal) {
    return <div>Loading...</div>;
  }
  return (
    <section className="container py-12 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-red-500">
        Meal Details
      </h1>

      <MealDetails meal={formattedMeals} />
    </section>
  );
}
