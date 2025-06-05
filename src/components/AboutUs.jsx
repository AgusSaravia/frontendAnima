export function AboutUs() {
  return (
    <div className="bg-[url('./assets/Montañita_svg.svg')] bg-[50%_-180%] h-full bg-no-repeat h-screen bg-fixed">
      <div className="min-h-screen flex justify-center px-4 py-10">
        <div className="max-w-5xl w-full">
          <h1
            className="text-white mt-20 text-5xl font-extrabold text-center 
            [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000] mb-8"
          >
            Sobre este Proyecto
          </h1>

          <hr className="border-black border-2 w-3/4 mx-auto mb-10" />

          <div>
            <h2 className="text-[#485C11] text-5xl font-extrabold mb-6 text-left">
              Proposito
            </h2>
            <div className="space-y-6  text-left max-w-2xl">
              <p>
                Nuestro proyecto final es un eCommerce innovador que fusiona la
                dinámica ágil y visual de Tinder con el mundo de los remates
                online.
              </p>
              <p>
                La idea nace de la necesidad de modernizar y dinamizar la
                experiencia de compra, transformando los tradicionales catálogos
                en una interfaz interactiva donde el usuario decide rápidamente
                si desea participar en una subasta o seguir explorando.
              </p>
              <p>
                Buscamos hacer de un catálgo algo entretenido y accesible,
                combinando usabilidad, diseño atractivo y oportunidad comercial.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-[#485C11] text-5xl font-extrabold text-center mb-10">
              Dream Team
            </h2>

            <div className="flex flex-col items-center mb-12 mx-20 text-center">
              <img
                src=""
                alt="Agustin Saravia"
                className="bg-gray-900  w-40 h-40 rounded-full mb-4 object-cover"
              />
              <span className="block text-3xl font-bold mb-3">
                Agustin Saravia
              </span>
              <span className="max-w-2xl text-2xl text-justify">
                Responsable de desarrollo y gestión de equipo. Desempeña una
                función clave en la revisión del código y en la definición de
                las estructuras del proyecto, tanto a nivel de base de datos
                como de organización lógica del software. Además, se dedica a
                organizar y verificar el cumplimiento de los objetivos
                propuestos, asegurando la coherencia y calidad del desarrollo.
              </span>
            </div>

            <div className="flex flex-col items-center mb-12 mx-20 text-center">
              <img
                src=""
                alt="Belén Martinez"
                className=" bg-gray-900 w-40 h-40 rounded-full mb-4 object-cover"
              />
              <span className="block text-3xl font-bold mb-3">
                Belén Martinez
              </span>
              <span className="max-w-2xl text-2xl text-justify">
                Desempeña el diseño de interfaz y el testing de software.
                Trabaja en la identidad visual, asegurando una experiencia
                estética coherente con el público objetivo. Testea para la
                prevención de vulnerabilidades, incluyendo pruebas del sistema
                para garantizar su correcto funcionamiento y documentando las
                incidencias y procesos. Aporta en los procesos de bitácora y
                filosofía.
              </span>
            </div>

            <div className="flex flex-col items-center mb-12 mx-20 text-center">
              <img
                src=""
                alt="Diego Carril"
                className="bg-gray-900 w-40 h-40 rounded-full mb-4 object-cover"
              />
              <span className="block text-3xl font-bold mb-3">
                Diego Carril
              </span>
              <span className="max-w-2xl text-2xl text-justify">
                Trabaja tanto en Back-End como del Front-End, implementa
                funcionalidades clave. Además, tiene un enfoque especial en la
                visión administrativa de la plataforma, asegurando que las
                herramientas y opciones disponibles para los administradores
                sean funcionales, intuitivas y seguras.
              </span>
            </div>

            <div className="flex flex-col items-center mb-12 mx-20 text-center">
              <img
                src=""
                alt="Tomas Perera"
                className="bg-gray-900 w-40 h-40 rounded-full mb-4 object-cover"
              />
              <span className="block text-3xl font-bold mb-3">
                Tomas Perera
              </span>
              <span className="max-w-2xl text-2xl text-justify">
                Es el encargado de la integración de las materias al proyecto,
                trabaja en la creación de esta bitácora, los requerimientos de
                inglés, matemática y participa en la lógica del código. Colabora
                en la implementación de funcionalidades de estilo y diseño.
                Participa en el Testing y aporta ideas creativas desde la
                perspectiva del usuario final.
              </span>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-[#485C11] text-5xl font-extrabold text-center mb-8">
              Herramientas Utilizadas
            </h2>
            <ul className="max-w-3xl mx-auto grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
              <li>React</li>
              <li>Redux</li>
              <li>Tailwind</li>
              <li>React Router</li>
              <li>Vite</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Docker</li>
              <li>Trello</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
