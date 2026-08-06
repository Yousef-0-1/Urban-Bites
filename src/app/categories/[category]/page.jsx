import MealCard from "@/components/ui/MealCard";
import Link from "next/link";
export default async function CategoryPage({ params }) {
  const { category } = await params;
  const res = await fetch(`http://localhost:3000/api`).then((res) =>
    res.json(),
  );
  const categoryMeals = res.filter(
    (meal) => meal.category.toLowerCase() === category.toLowerCase(),
  );
  if (!categoryMeals.length) {
    return <div>Loading...</div>;
  }
  return (
    <section className="container py-12 mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center tracking-wide text-red-500">
        {category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryMeals.map((meal) => (
          <Link href={`/meal/${meal.id}`} key={meal.id}>
            <MealCard meal={meal} />
          </Link>
        ))}
      </div>
    </section>
  );
}
