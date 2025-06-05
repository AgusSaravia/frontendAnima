export function Info() {
  return (
    <div className="flex overflow-hidden mt-10">
      <div className="w-1/2  flex items-center justify-center p-8">
        <span className="text-[#485C11] font-bold text-5xl ">
          Make your automatic offer and participate in the best opportunities
          with a single click.
        </span>
      </div>

      <div className="w-px bg-gray-900" />

      <div className="w-1/2 p-8 space-y-6 ">
        <div className="space-y-2">
          <h2 className="text-2xl text-[#485C11] font-bold">Open Exhibition</h2>
          <span className="block font-semibold">
            The exhibition is open from the beginning until the end of the
            online auction, the countdown will be public and in real time.
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl text-[#485C11] font-bold">Offer</h2>
          <span className="block font-semibold">
            With a few simple steps you can start bidding (See tutorial)
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl text-[#485C11] font-bold">Commissions</h2>
          <span className="block font-semibold">
            In the winning bid our commission will be 18.3% plus taxes
          </span>
        </div>
      </div>
    </div>
  );
}
