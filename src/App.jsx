// import { ProductChooser } from "./components/swipe/Swipe";
// import Sidebar from "./components/Sidebar";
import AboutUs from "./components/AboutUs";
import CategoriesContainer from "./components/containers/CategoriesContainer";
import HeroProductContainer from "./components/containers/HeroProductContainer";
import SearchContainer from "./components/containers/SearchContainer";
import { Info } from "./components/Info";

function App() {
  return (
    <>
      <section className="w-4/5 mx-auto">
        <SearchContainer />
        <HeroProductContainer />
        <Info />
        <CategoriesContainer />
        <AboutUs />
      </section>
    </>
  );
}

export default App;
