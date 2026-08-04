export default function Newsletter() {
  return (
    <section className="bg-[#FFEFEC] dark:bg-neutral-800 py-16">
      <div className="container mx-auto text-center flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
        <div className="left-side">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Stay updated with the latest news and offers from our company.
          </p>
        </div>
        <form className="rounded-full bg-white dark:bg-neutral-700 p-2 shadow-md flex items-center justify-between w-full max-w-md">
          <input
            type="email"
            className="flex-1 px-4 py-2 outline-none w-full bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-200"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-red-600 transition duration-300 shrink-0 font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
