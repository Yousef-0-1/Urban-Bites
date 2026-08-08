"use client";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cartStore";

export default function MealCard({ meal }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="group overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-[0_20px_45px_-25px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-950">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-red-500/30 to-transparent" />
        <div className="relative h-72 overflow-hidden rounded-t-[2rem] bg-neutral-100 dark:bg-neutral-900">
          {meal?.image ? (
            <Image
              src={meal.image}
              alt={meal.title || meal.name || "Meal"}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-neutral-400 dark:text-neutral-500">
              No Image
            </div>
          )}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-600 shadow-sm shadow-red-500/20 dark:bg-neutral-950/90 dark:text-red-400">
          Popular
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-red-600 dark:bg-red-500/10 dark:text-red-300">
            {meal.category}
          </span>
          <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            {meal.rating?.toFixed(1)} ★
          </span>
        </div>

        <h3 className="text-2xl font-bold leading-tight text-neutral-950 transition-colors duration-300 group-hover:text-red-600 dark:text-white">
          {meal.title}
        </h3>
        <p className="min-h-[3rem] text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {meal.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <p className="text-2xl font-extrabold text-neutral-950 dark:text-white">
            ${meal.price.toFixed(2)}
          </p>
          <button
            className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-600 z-4 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(meal, 1);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
