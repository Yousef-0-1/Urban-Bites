import Categories from "@/components/Categories";
export default function Browse() {
  return (
    <section className="container mx-auto py-16">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          More Than <span className="text-red-500 mx-2">100</span> Delicious
          Meals <br className="hidden lg:block" /> To Choose From
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Explore a variety of delicious meals and find your favorite.
        </p>
      </div>
      <Categories />
    </section>
  );
}
