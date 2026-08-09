import prisma from "@/lib/prisma";
import MealCard from "@/components/ui/MealCard";
import Link from "next/link";
export default async function Menu() {
  const meal = await prisma.meals.findMany({
    include: {
      categories: true,
    },
  });
  const formattedMeals = meal.map((meal) => ({
    ...meal,
    rating: Number(meal.rating),
  }));
  return (
    <section className="container py-12 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-wide">
        Menu
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {formattedMeals.map((meal) => (
          <Link href={`/meal/${meal.id}`} key={meal.id}>
            <MealCard meal={meal} />
          </Link>
        ))}
      </div>
    </section>
  );
}
