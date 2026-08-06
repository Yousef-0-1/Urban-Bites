import CartItem from "@/components/ui/CartItem";

const cartItems = [
  {
    id: 1,
    title: "Smokey BBQ Bacon Burger",
    description:
      "Double beef patty, crispy bacon, smoked cheddar, and homemade BBQ sauce.",
    category: "Burgers",
    image: "/mealspics/Smokey-BBQ-Bacon-Burger.jpg",
    price: 280,
    calories: 820,
    quantity: 2,
  },
  {
    id: 2,
    title: "Margherita Supreme",
    description:
      "Classic San Marzano tomato sauce, fresh mozzarella, extra virgin olive oil, and basil.",
    category: "Pizzas",
    image: "/mealspics/Margherita-Supreme.jpg",
    price: 210,
    calories: 850,
    quantity: 1,
  },
];

const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);
const delivery = 15;
const total = subtotal + delivery;

export default function CartPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 rounded-[2rem] border border-neutral-200 bg-red-50/70 p-8 shadow-sm shadow-red-200/40 dark:border-neutral-800 dark:bg-red-950/20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-red-600 dark:text-red-400">
            Your order
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-neutral-950 dark:text-white">
            Delicious meals waiting in your cart.
          </h1>
          <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
            Review your selection, adjust quantities, and complete your order
            with a fresh, modern checkout experience.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/95">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-neutral-950 dark:text-white">
                  Cart items
                </h2>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {cartItems.length} items ready for checkout.
                </p>
              </div>
              <div className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                Estimated delivery 20-30 min
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/95">
            <h2 className="text-2xl font-bold text-neutral-950 dark:text-white">
              Order summary
            </h2>
            <div className="mt-6 space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery fee</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 rounded-[1.25rem] bg-neutral-100 p-5 text-sm text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
              <div className="flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Taxes and service fees included.
              </p>
            </div>

            <button className="mt-6 w-full rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600">
              Proceed to Checkout
            </button>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/95">
            <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">
              Need help?
            </h3>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Track your order, update your preferences, or contact our customer
              support for fast assistance.
            </p>
            <div className="mt-5 rounded-3xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/10 dark:text-red-300">
              Free delivery on orders above $35 today.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
