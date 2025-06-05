export default function SearchBar() {
    return (
      <div className="w-full flex justify-center my-6">
        <input
          type="text"
          placeholder="Búsqueda"
          className="
            w-full 
            max-w-xl 
            px-4 
            py-2 
            border 
            border-gray-300 
            rounded-full 
            focus:outline-none 
            focus:ring-2 
            focus:ring-green-500 
            placeholder-gray-400
          "
        />
      </div>
    );
  }
  