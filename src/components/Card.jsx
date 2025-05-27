import { Buttons } from "./Buttons";

export function Card({ model, name, imageUrl }) {

    return (
    <div
      className="
        flex flex-col  
        p-4
        bg-white 
        shadow-lg 
        rounded-2xl 
        w-[18rem] md:w-[30rem] 
        h-[50dvh] md:h-[70dvh]
      "
    >
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="
            object-cover 
            w-full h-auto 
            md:w-full md:h-full 
            rounded-xl
          "
        />
      </div>
      <div className="flex flex-col m-auto">
        <span className="text-lg font-medium  mb-1">{model}</span>
        <span className="text-base">{name}</span>
      </div>
        <div className="flex flex-col md:flex-rwo">
            <Buttons/>
        </div>
    </div>
  );
}
