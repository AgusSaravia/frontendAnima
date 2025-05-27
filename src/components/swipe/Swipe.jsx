// ProductChooser.jsx
import { useState } from "react";
import { Card } from "../Card";

export function ProductChooser({ products }) {
  const [current, setCurrent] = useState(0);

  const decide = (dir) => {
    console.log(dir === "right" ? "✅ Like:" : "❌ Nope:", products[current]);
    setCurrent((c) => c + 1);
  };

  if (current >= products.length) {
    return (
      <p className="text-center mt-10 text-gray-500">
        No quedan productos
      </p>
    );
  }

  const prod = products[current];

  return (
    <div className="flex flex-col items-center space-y-6">
      <Card
        model={prod.model}
        name={prod.name}
        imageUrl={prod.imageUrl}
      />
      <div className="flex space-x-8">
        <button
          onClick={() => decide("left")}
          className="w-16 h-16 rounded-full bg-red-500 text-white text-2xl flex items-center justify-center"
        >
          ✕
        </button>
        <button
          onClick={() => decide("right")}
          className="w-16 h-16 rounded-full bg-green-500 text-white text-2xl flex items-center justify-center"
        >
          ❤
        </button>
      </div>
    </div>
  );
}
