const reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "Food Enthusiast",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Busy Professional",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,",
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Health Conscious",
    feedback:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,",
  },
];
export default function Feedback() {
  return (
    <section className="container mx-auto py-16">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          Our <span className="text-red-500 mx-2">Clients</span> Feedback
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
          Read what our satisfied customers have to say about their experience
          with our service.
        </p>
        <svg
          width="60"
          height="55"
          viewBox="0 0 60 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.8336 2.42599V12.3003C25.8336 13.6401 24.7325 14.7253 23.375 14.7253C18.5309 14.7253 15.8956 19.6254 15.5298 29.2984H23.375C24.7324 29.2984 25.8336 30.3851 25.8336 31.7234V52.5735C25.8336 53.9128 24.7325 54.998 23.375 54.998H2.45876C1.10159 54.998 3.8147e-06 53.9116 3.8147e-06 52.5735V31.7232C3.8147e-06 27.0867 0.474567 22.832 1.40616 19.0743C2.3632 15.2222 3.83227 11.8545 5.77161 9.06365C7.76612 6.19569 10.2632 3.94516 13.1891 2.37785C16.1373 0.800526 19.5642 0 23.376 0C24.7324 0.00101852 25.8336 1.0872 25.8336 2.42599ZM57.5419 14.7262C58.8993 14.7262 60 13.6401 60 12.3022V2.42583C60 1.08721 58.8993 0.00186539 57.5419 0.00186539C53.732 0.00186539 50.3033 0.802563 47.3571 2.37971C44.4296 3.94686 41.9329 6.19552 39.9385 9.06551C37.998 11.8563 36.5291 15.2242 35.5721 19.0782C34.6399 22.8359 34.1664 27.0908 34.1664 31.7252V52.5755C34.1664 53.9148 35.2682 55 36.625 55H57.5419C58.8993 55 60 53.9138 60 52.5755V31.7252C60 30.3861 58.8993 29.3003 57.5419 29.3003H49.8069C50.1682 19.6265 52.7655 14.7262 57.5419 14.7262Z"
            fill="#FF5331"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-lg:w-[90%] mx-auto">
        {reviews.map((review) => (
          <div
            className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6"
            key={review.id}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-center text-md">
              {review.feedback}
            </p>

            <div className="flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {review.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
