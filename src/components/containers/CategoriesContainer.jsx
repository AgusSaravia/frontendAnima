import { Categories } from "../Categories";
const CategoriesContainer = () => {
  const categories = [
    { name: "CARS", img: "assets/categorias/cars.jpg" },
    { name: "ESTATE", img: "assets/categorias/casa.jpg" },
    { name: "ALCOHOL", img: "assets/categorias/alcohol.png" },
    { name: "MOTORCYCLES", img: "assets/categorias/motorcycle.jpg" },
    { name: "MUEBLES", img: "assets/categorias/muebles.jpg" },
    { name: "COMPUTERS", img: "assets/categorias/computadoras.jpg" },
    // { name: "TOOLS", img: "assets/categorias/tools.jpg" },
  ];
  return (
    <>
      <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {categories.map((category, index) => (
          <Categories key={index} {...category} />
        ))}
      </section>
    </>
  );
};

export default CategoriesContainer;
