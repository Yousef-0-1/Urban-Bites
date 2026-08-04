const steps = [
  { icon: "🍽️", title: "Choose Your Meal" },
  { icon: "🛒", title: "Add to Cart" },
  { icon: "💳", title: "Checkout" },
  { icon: "😋", title: "Enjoy Your Food" },
];
export default function HowTo() {
  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          How To <span className="text-red-500 mx-2">Order</span> Your Favorite
          Meal?
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Follow these simple steps to order your favorite meal.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 text-center"
          >
            <div className="text-4xl font-bold text-red-500 mb-4">
              <div className="mb-2">{index + 1}</div>
              {step.icon}
            </div>

            <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc ut.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
