import React from 'react';

const offers = [
  {
    id: 1,
    title: 'Leather Backpack',
    subtitle: 'Vintage-style rucksack',
    iconBg: 'bg-orange-300',
    time: '3h 2m',
  },
  {
    id: 2,
    title: 'Wireless Earbuds',
    subtitle: 'Noise-canceling blue',
    iconBg: 'bg-gray-200',
    time: '6h 50m',
  },
  {
    id: 3,
    title: 'Sneakers',
    subtitle: 'Lightweight-running',
    iconBg: 'bg-gray-300',
    time: '1h 15m',
  },
  {
    id: 4,
    title: 'Wristwatch',
    subtitle: 'Minimalist-design',
    iconBg: 'bg-yellow-200',
    time: '1d 4h',
  },
];

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-full sm:w-[18rem] h-[100dvh] bg-white border-r border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-4">
        <h1 className="text-white text-lg font-semibold">My Bids</h1>
      </div>

      {/* Profile */}
      <div className="flex items-center px-4 py-3 border-b border-gray-100">
        <img
          src="https://via.placeholder.com/40"
          alt="avatar"
          className="w-10 h-10 rounded-full bg-gray-200"
        />
        <div className="ml-3">
          <p className="text-gray-900 font-medium">Alex</p>
          <p className="text-gray-500 text-sm">Premium Member</p>
        </div>
      </div>

      {/* View All Auctions button */}
      <div className="px-4 py-3 border-b border-gray-100">
        <a
          href="#"
          className="block bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-blue-100"
        >
          View All Auctions
        </a>
        <p className="mt-1 text-xs text-gray-500">Continue bidding on your items</p>
      </div>

      {/* Offers */}
      <div className="px-4 pt-5">
        <h2 className="text-gray-600 text-xs font-semibold uppercase">My Offers</h2>
      </div>

      <ul className="mt-2 space-y-4 flex-1 overflow-y-auto px-4 pb-4">
        {offers.map(({ id, title, subtitle, iconBg, time }) => (
          <li key={id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${iconBg}`} />
              <div className="flex flex-col">
                <span className="text-gray-900 font-medium">{title}</span>
                <span className="text-gray-500 text-sm">{subtitle}</span>
              </div>
            </div>
            <span className="text-green-600 text-sm font-medium">{time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
