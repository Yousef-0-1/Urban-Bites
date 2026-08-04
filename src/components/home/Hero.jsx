"use client";
import Image from "next/image";
const handleSearch = (e) => {
  e.preventDefault();
};
export default function Hero() {
  return (
    <section className="container flex items-center justify-center flex-col-reverse lg:flex-row gap-8 mx-auto py-16">
      <div className="flex-1 mx-auto text-center lg:text-left gap-12 flex flex-col items-center   lg:items-start">
        <h1 className="text-6xl font-bold ">Welcome to Urban Bites</h1>
        <p className="text-xl ">
          Your favorite meals delivered to your doorstep.
        </p>
        <form
          onSubmit={handleSearch}
          className="rounded-full bg-white dark:bg-neutral-800 p-2 shadow-md flex items-center justify-between w-full max-w-md"
        >
          <input
            type="text"
            className="flex-1 px-4 py-2 outline-none w-full bg-transparent text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            placeholder="Search for dishes..."
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-red-600 transition duration-300 shrink-0 font-medium"
          >
            Order Now
          </button>
        </form>
      </div>
      <Image
        src="/Hero-burger.png"
        alt="Hero Image"
        width={600}
        height={600}
        className="flex-1 lg:flex-[0.75] object-cover rounded-lg select-none pointer-events-none"
        priority
      />
    </section>
  );
}
