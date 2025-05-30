// import { ProductChooser } from "./components/swipe/Swipe";
// import Sidebar from "./components/Sidebar";
import { Card } from "./components/Card";
const products = [
  {
    model: "C1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c1.jpg",
    current: 15990,
    timeLeft: "5h 23m",
    bids: 5,
  },
  {
    model: "C3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",

    imageUrl: "/src/assets/c3.jpg",
    current: 18990,
    timeLeft: "4h 10m",
    bids: 8,
  },
  {
    model: "C4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",

    imageUrl: "/src/assets/c4.jpg",
    current: 21990,
    timeLeft: "3h 45m",
    bids: 12,
  },
  {
    model: "C5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",

    imageUrl: "/src/assets/c5.jpg",
    current: 40990,
    timeLeft: "2h 30m",
    bids: 20,
  },
  {
    model: "C3 Aircross",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",

    imageUrl: "/src/assets/c3aircross.jpg",
    current: 23990,
    timeLeft: "2h 30m",
    bids: 20,
  },
];

function App() {
  return (
    <div className="w-full px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
