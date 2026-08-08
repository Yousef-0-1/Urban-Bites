import Image from "next/image";
import { useCartStore } from "@/lib/store/cartStore";

export default function CartItem({ item }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <article className="flex flex-col gap-4 rounded-[2rem] border border-neutral-200 bg-white/95 p-5 shadow-sm shadow-neutral-200/60 transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950/90 dark:shadow-black/20">
      <div className="flex gap-4 md:gap-6">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="112px"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-neutral-400 dark:text-neutral-500">
              No image
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {item.category}
                </p>
              </div>
              <span className="text-lg font-semibold text-red-600 dark:text-red-400">
                ${item.price.toFixed(2)}
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                {item.quantity} pcs
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {item.calories} kcal
              </span>
            </div>

            <button
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:border-red-500 hover:text-red-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:border-red-500 dark:hover:text-red-400 cursor-pointer"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
