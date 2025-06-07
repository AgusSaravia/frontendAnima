import { Card } from "../Card";
const HeroProductContainer = () => {
  const products = [
    {
      id: 1,
      model: "C1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
      imageUrl: "/assets/c1.jpg",
      current: 15990,
      timeLeft: "5h 23m",
      bids: 5,
    },
    {
      id: 2,
      model: "C3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
      imageUrl: "/assets/c3.jpg",
      current: 18990,
      timeLeft: "4h 10m",
      bids: 8,
    },
    {
      id: 3,
      model: "C4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
      imageUrl: "/assets/c4.jpg",
      current: 21990,
      timeLeft: "3h 45m",
      bids: 12,
    },
    {
      id: 4,
      model: "C5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",
      imageUrl: "/assets/c5.jpg",
      current: 40990,
      timeLeft: "2h 30m",
      bids: 20,
    },
    // {
    //   model: "C3 Aircross",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, asperiores.",

    //   imageUrl: "/assets/c3aircross.jpg",
    //   current: 23990,
    //   timeLeft: "2h 30m",
    //   bids: 20,
    // },
  ];

  return (
    <>
      <h1 className="text-[#485C11] font-roboto text-5xl font-bold mb-3">
        Los mas elegidos hoy:
      </h1>
      <div className="bg-[#485C11] p-5 py-8 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {products.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroProductContainer;
