export function Categories({ name, img }) {
  return (
    <div className="relative w-full h-48 rounded-2xl overflow-hidden">
      <img
        src={img}
        alt={`Imagen de ${name}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
        <p className="text-white text-xl font-semibold text-center">{name}</p>
      </div>
    </div>
  );
}
