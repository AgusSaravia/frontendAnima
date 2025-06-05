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
    <div>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-full ">
        <img
          src={imageUrl}
          alt={`Image of ${model}`}
          className="w-100 h-48 object-cover p-1  rounded-2xl"
        />

        <div className="p-4 space-y-2">
          <h2 className="font-semibold text-base text-gray-800">{model}</h2>
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
            <button className="bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-emerald-600">
              Bid ${nextBid}
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
