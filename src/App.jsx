// import { ProductChooser } from "./components/swipe/Swipe";
// import Sidebar from "./components/Sidebar";
import AboutUs from "./components/AboutUs";
import { Card } from "./components/Card";
import { Categories } from "./components/Categories";
import Search from "./components/search";
const products = [
  {
    id: 1,
    model: "C1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c1.jpg",
    current: 15990,
    timeLeft: "5h 23m",
    bids: 5,
  },
  {
    id: 2,
    model: "C3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c3.jpg",
    current: 18990,
    timeLeft: "4h 10m",
    bids: 8,
  },
  {
    id: 3,
    model: "C4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c4.jpg",
    current: 21990,
    timeLeft: "3h 45m",
    bids: 12,
  },
  {
    id: 4,
    model: "C5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
    imageUrl: "/src/assets/c5.jpg",
    current: 40990,
    timeLeft: "2h 30m",
    bids: 20,
  },
  // {
  //   model: "C3 Aircross",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",

  //   imageUrl: "/src/assets/c3aircross.jpg",
  //   current: 23990,
  //   timeLeft: "2h 30m",
  //   bids: 20,
  // },
];

// Categories data
const categories = [
  { name: "CARS", img: "/src/assets/categorias/cars.jpg" },
  { name: "ESTATE", img: "/src/assets/categorias/casa.jpg" },
  { name: "ALCOHOL", img: "/src/assets/categorias/alcohol.png" },
  { name: "MOTORCYCLES", img: "/src/assets/categorias/motorcycle.jpg" },
  { name: "MUEBLES", img: "/src/assets/categorias/muebles.jpg" },
  { name: "COMPUTERS", img: "/src/assets/categorias/computadoras.jpg" },
  // { name: "TOOLS", img: "/src/assets/categorias/tools.jpg" },
];
function App() {
  return (
    <div>
      <AboutUs />
    </div>
    // <div className="w-full max-w-screen-xl mx-auto px-1 md:px-8 py-8">
    //   <div className="w-full text-center pb-5 ">
    //     <Search />
    //   </div>
    //   <span>
    //     <h1 className="text-[#485C11] font-roboto text-5xl font-bold mb-3">
    //       Los mas elegidos hoy:
    //     </h1>
    //   </span>
    //   <div className="bg-[#485C11] p-5 py-8 rounded-2xl">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
    //       {products.map((product, index) => (
    //         <Card key={index} {...product} />
    //       ))}
    //     </div>
    //   </div>
    //   <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
    //     {categories.map((category, index) => (
    //       <Categories key={index} {...category} />
    //     ))}
    //   </div>
    // </div>
  );
}

export default App;
