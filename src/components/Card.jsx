export function Card({
  model,
  imageUrl,
  current,
  timeLeft,
  bids,
  description,
}) {
  const nextBid = current + 10;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden max-w-full">
      <img
        src={imageUrl}
        alt={`Image of ${model}`}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-1.5">
        <h2 className="font-semibold text-base text-gray-900">{model}</h2>
        <p className="text-sm text-gray-500">{description}</p>

        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <div>
            <p className="text-gray-400">Current Bid</p>
            <p className="text-black font-semibold">${current}</p>
          </div>
          <div>
            <p className="text-gray-400">Time Left</p>
            <p className="text-purple-600 font-medium">{timeLeft}</p>
          </div>
          <div>
            <p className="text-gray-400">Bids</p>
            <p className="text-black">{bids}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-emerald-600 transition">
            Bid ${nextBid}
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
