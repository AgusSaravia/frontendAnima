import { ProductChooser } from "./components/swipe/Swipe";
import Sidebar from "./components/Sidebar";

const products = [
  { model: "S1000", name: "Mountain Bike", imageUrl: "/pexels-photo-8947698-3122970947.jpeg" },
  { model: "R200", name: "Road Bike",     imageUrl: "/pexels-photo-8947698-3122970947.jpeg" },
  { model: "C300", name: "City Cruiser",  imageUrl: "/pexels-photo-8947698-3122970947.jpeg" },
  { model: "U400", name: "Urban Commuter",imageUrl: "/pexels-photo-8947698-3122970947.jpeg" },
];
''
function App() {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar />
        <div className=" m-auto">
          <ProductChooser products={products} />
        </div>
      </div>
    </>
  );
}

export default App;
