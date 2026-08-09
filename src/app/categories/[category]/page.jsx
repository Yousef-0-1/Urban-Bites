import MealCard from "@/components/ui/MealCard";
import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const categoryData = await prisma.categories.findUnique({
    where: {
      name: category,
    },
    include: {
      meals: true,
    },
  });
  const formattedMeals = categoryData.meals.map((meal) => ({
    ...meal,
    rating: Number(meal.rating),
  }));

  // if (!categoryData.length) {
  //   return <div>Loading...</div>;
  // }
  return (
    <section className="container py-12 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-red-500">
        {category}
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
