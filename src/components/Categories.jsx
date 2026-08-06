import Link from "next/link";
const categories = [
  {
    icon: "🍔",
    title: "Burgers",
    link: "/categories/burgers",
  },
  {
    icon: "🍕",
    title: "Pizzas",
    link: "/categories/pizzas",
  },
  {
    icon: "🥗",
    title: "Salads",
    link: "/categories/salads",
  },
  {
    icon: "🍣",
    title: "Sushi",
    link: "/categories/sushi",
  },
  {
    icon: "🍝",
    title: "Pasta",
    link: "/categories/pasta",
  },
  {
    icon: "🍰",
    title: "Desserts",
    link: "/categories/desserts",
  },
];

export default function categoriesUi() {
  return (
    <div className="categories flex flex-wrap justify-center gap-8 mt-16">
      {categories.map((category) => (
        <Link
          href={category.link}
          key={category.title}
          className="w-full max-w-[150px]"
        >
          <div className="flex flex-col items-center justify-center p-10 bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform cursor-pointer transition duration-300 w-full max-w-[150px]">
            <span className="text-4xl mb-5 rounded-full bg-gray-200 dark:bg-gray-600 p-4 flex items-center justify-center">
              {category.icon}
            </span>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {category.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
