"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

export default function MealDetails({ meal }) {
  const [amount, setAmount] = useState(1);

  function decreaseAmount() {
    setAmount((a) => Math.max(1, a - 1));
  }

  function increaseAmount() {
    setAmount((a) => a + 1);
  }

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 lg:grid-cols-2">
      <div className="relative self-start overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-100 via-white to-neutral-100 p-6 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.35)] dark:from-red-950/40 dark:via-neutral-950 dark:to-neutral-900">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-red-500/15 to-transparent" />
        <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-white/70 bg-neutral-50 shadow-xl shadow-red-200/20 dark:border-neutral-800 dark:bg-neutral-950">
          {meal?.image ? (
            <Image
              src={meal.image}
              alt={meal.title || meal.name || "Meal"}
              width={900}
              height={900}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-neutral-400 dark:text-neutral-500">
              No Image
            </div>
          )}
        </div>
      </div>

      <div className="h-full overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/95">
        <div className="flex h-full flex-col justify-between gap-8">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-600 dark:bg-red-500/10 dark:text-red-300">
                Signature meal
              </span>
              <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
                {meal.category}
              </span>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-4xl font-black tracking-tight text-neutral-950 dark:text-white">
                {meal.title}
              </h1>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 dark:bg-red-500/10 dark:text-red-300">
                <span className="inline-flex items-center gap-1">
                  {[...Array(5)].map((_, index) => {
                    const starNumber = index + 1;
                    return (
                      <span key={index} className="text-base text-yellow-400">
                        {meal.rating >= starNumber ? (
                          <FaStar />
                        ) : meal.rating >= starNumber - 0.5 ? (
                          <FaStarHalf />
                        ) : (
                          ""
                        )}
                      </span>
                    );
                  })}
                </span>
                <span>{meal.rating?.toFixed(1) || "0.0"}</span>
              </div>
            </div>
            <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              {meal.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-100 p-5 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                  Calories
                </p>
                <p className="mt-2 text-2xl font-semibold text-neutral-950 dark:text-white">
                  {meal.calories} kcal
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-100 p-5 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                  Price
                </p>
                <p className="mt-2 text-2xl font-semibold text-red-600 dark:text-red-400">
                  ${meal.price}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 rounded-[1.5rem] border border-neutral-200 bg-neutral-100 p-3 dark:border-neutral-800 dark:bg-neutral-900">
              <button
                type="button"
                onClick={decreaseAmount}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-neutral-800 shadow-sm transition hover:bg-neutral-200 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-800"
              >
                -
              </button>
              <div className="flex-1 text-center text-xl font-semibold text-neutral-950 dark:text-white">
                {amount}
              </div>
              <button
                type="button"
                onClick={increaseAmount}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-2xl text-white shadow-sm transition hover:bg-red-600"
              >
                +
              </button>
            </div>

            <button className="rounded-[1.5rem] bg-red-500 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600">
              Add To Cart
            </button>

            <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
              <p className="font-semibold text-neutral-900 dark:text-white">
                Why this meal?
              </p>
              <p className="mt-2 leading-7">
                Crafted for bold flavor and balanced texture, this dish is
                perfect for both a relaxed dinner and a quick meal on the go.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            {[...Array(5)].map((_, index) => {
              const starNumber = index + 1;
              return (
                <span key={index} className="text-xl text-yellow-400">
                  {meal.rating >= starNumber ? (
                    <FaStar />
                  ) : meal.rating >= starNumber - 0.5 ? (
                    <FaStarHalf />
                  ) : (
                    ""
                  )}
                </span>
              );
            })}
            <span className="font-semibold text-neutral-900 dark:text-white">
              {meal.rating?.toFixed(1)} Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
