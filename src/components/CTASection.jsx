// import videoThumbnail from '../assets/video-thumbnail.png';

export default function CTASection() {
  return (
    <section className="container mx-auto px-4 my-12 flex flex-col md:flex-row items-center">
      {/** Text Section **/}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 leading-tight">
          Realiza tu oferta automática y participa <br />
          de las mejores oportunidades con un solo click.
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mt-2"></div>
      </div>

      {/** Video/Image Section **/}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md">
          <div className="bg-purple-600 rounded-lg overflow-hidden">
            <img 
              src={"#"} 
              alt="Video Demo" 
              className="w-full h-auto object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition"
                fill="currentColor" 
                viewBox="0 0 84 84" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.5)" />
                <path d="M33 27L57 42L33 57V27Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
