const categories = [
  {
    icon: "🍔",
    title: "Burgers",
  },
  {
    icon: "🍕",
    title: "Pizzas",
  },
  {
    icon: "🥗",
    title: "Salads",
  },
  {
    icon: "🍣",
    title: "Sushi",
  },
  {
    icon: "🍝",
    title: "Pasta",
  },
  {
    icon: "🍰",
    title: "Desserts",
  },
];
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
      <div className="categories flex flex-wrap justify-center gap-8 mt-16">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex flex-col items-center justify-center p-10 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform cursor-pointer transition duration-300 w-full max-w-[150px]"
          >
            <span className="text-4xl mb-5 rounded-full bg-gray-200 dark:bg-gray-600 p-4 flex items-center justify-center">
              {category.icon}
            </span>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {category.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
