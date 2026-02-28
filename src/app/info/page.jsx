import SectionContainer from "@/components/section-container";
import CallToAction from "@/components/call-to-action";
import Paragraph from "@/ui/paragraph";
import Title from "@/ui/title";
import PortfolioButtons from "@/ui/portfolio-button";
import Highlighted from "@/components/highlighted";
import Link from "next/link";

export function generateMetadata() {
  return {
    title: "Sobre Nosotros | Codeluxe",
    description: "Conoce más sobre Codeluxe, nuestro equipo y misión.",
    alternates: {
      canonical: "/info/",
    },
    openGraph: {
      url: "https://codeluxe.tech/info/",
    },
  };
}

// Datos del equipo
const programadores = [
  {
    nombre: "Martín González",
    imagen: "/placeholder-programmer-1.webp",
    linkedin: "https://linkedin.com/in/martingonzalez",
  },
  {
    nombre: "Sofía Rodríguez",
    imagen: "/placeholder-programmer-2.webp",
    linkedin: "https://linkedin.com/in/sofiarodriguez",
  },
  {
    nombre: "Lucas Fernández",
    imagen: "/placeholder-programmer-3.webp",
    linkedin: "https://linkedin.com/in/lucasfernandez",
  },
];

const marketing = [
  {
    nombre: "Ana Martínez",
    imagen: "/placeholder-marketing-1.webp",
    linkedin: "https://linkedin.com/in/anamartinez",
  },
  {
    nombre: "Diego Pérez",
    imagen: "/placeholder-marketing-2.webp",
    linkedin: "https://linkedin.com/in/diegoperez",
  },
];

const disenadores = [
  {
    nombre: "Valentina López",
    imagen: "/placeholder-designer-1.webp",
    linkedin: "https://linkedin.com/in/valentinalopez",
  },
];

export default function Info() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto sm:my-12">
      <SectionContainer>
        <Title>¿Quiénes somos?</Title>

        <Paragraph className="text-base">
          Equipo de desarrolladores apasionados por crear{" "}
          <Highlighted color="text-primary">
            soluciones digitales simples, efectivas y con una estética moderna.
          </Highlighted>
        </Paragraph>

        <Paragraph className="text-base">
          Nuestra misión es{" "}
          <Highlighted>
            acompañar a negocios, marcas y emprendedores
          </Highlighted>{" "}
          en su transformación digital, ofreciéndoles{" "}
          <Highlighted color="text-primary">
            herramientas personalizadas, funcionales y fáciles de usar.
          </Highlighted>
        </Paragraph>

        <Paragraph className="text-base">
          Somos <Highlighted>jóvenes, creativos y responsables</Highlighted> y
          estamos convencidos de que{" "}
          <Highlighted color="text-primary">
            la tecnología puede hacer que cualquier negocio brille.
          </Highlighted>{" "}
          En <Highlighted>Codeluxe</Highlighted>, cada proyecto es una
          oportunidad para{" "}
          <Highlighted>crecer, innovar y dejar huella</Highlighted>.
        </Paragraph>

        <CallToAction href="/propuesta" ariaLabel="Enviá tu propuesta">
          Enviá tu propuesta
        </CallToAction>
      </SectionContainer>

      <SectionContainer>
        <Title>Qué significa Codeluxe</Title>

        <Paragraph className="text-base">
          <Highlighted color="text-primary">Codeluxe</Highlighted> nace como un
          juego de palabras entre{" "}
          <Highlighted color="text-primary">code luxe</Highlighted> y{" "}
          <Highlighted color="text-primary">co deluxe</Highlighted>.
        </Paragraph>

        <Paragraph className="text-base">
          <Highlighted color="text-primary">Code luxe</Highlighted> representa
          nuestro compromiso con un <Highlighted>“código de lujo”:</Highlighted>{" "}
          calidad, cuidado en los detalles y soluciones desarrolladas con{" "}
          <Highlighted>alto nivel técnico.</Highlighted>
        </Paragraph>

        <Paragraph className="text-base">
          <Highlighted color="text-primary">Co deluxe</Highlighted> simboliza{" "}
          <Highlighted>“compañeros de lujo”:</Highlighted> la idea de trabajar
          en equipo con cada cliente, acompañarlo de forma cercana y brindar un{" "}
          <Highlighted>servicio confiable.</Highlighted>
        </Paragraph>

        <Paragraph className="text-base">
          Para nosotros,{" "}
          <Highlighted color="text-primary">Codeluxe</Highlighted> no es solo un
          nombre: <Highlighted>es una forma de trabajar.</Highlighted>
        </Paragraph>
      </SectionContainer>

      <SectionContainer>
        <Title>Nuestra historia</Title>

        <Paragraph className="text-base">
          <Highlighted color="text-primary">Codeluxe</Highlighted> surge al
          detectar que muchos negocios tenían páginas web lentas, mal diseñadas
          o que no generaban resultados reales.
        </Paragraph>

        <Paragraph className="text-base">
          Empezamos desarrollando sitios y sistemas para emprendedores y marcas
          pequeñas, y los resultados nos llevaron a profesionalizar el proyecto.
        </Paragraph>

        <Paragraph className="text-base">
          Así nació <Highlighted color="text-primary">Codeluxe</Highlighted>,
          con el objetivo de ofrecer desarrollo web profesional, diseño moderno
          y atención personalizada.
        </Paragraph>

        <Paragraph className="text-base">
          Hoy seguimos trabajando con el mismo enfoque:{" "}
          <Highlighted>
            crear soluciones digitales que se vean bien, funcionen mejor y
            ayuden a crecer.
          </Highlighted>
        </Paragraph>
      </SectionContainer>

      <SectionContainer>
        <Title>Qué hacemos</Title>

        <Paragraph className="text-base">
          Damos vida a ideas y las convertimos en{" "}
          <Highlighted>experiencias digitales completas</Highlighted>,
          combinando diseño, desarrollo y estrategia.
        </Paragraph>

        <Paragraph className="text-base">
          – <Highlighted>Desarrollo web a medida:</Highlighted> sitios,
          sistemas, aplicaciones y tiendas online.
        </Paragraph>

        <Paragraph className="text-base">
          – <Highlighted>Diseño web moderno:</Highlighted> interfaces claras,
          atractivas y orientadas a conversión.
        </Paragraph>

        <Paragraph className="text-base">
          – <Highlighted>SEO técnico y optimización:</Highlighted> velocidad,
          estructura y posicionamiento.
        </Paragraph>

        <Paragraph className="text-base">
          – <Highlighted>Mantenimiento y soporte:</Highlighted> mejoras
          continuas, seguridad y rendimiento.
        </Paragraph>

        <Paragraph className="text-base">
          – <Highlighted>Copywriting estratégico:</Highlighted> textos pensados
          para guiar y convertir usuarios.
        </Paragraph>
      </SectionContainer>

      <SectionContainer>
        <Title>Cómo trabajamos</Title>

        <Paragraph className="text-base">
          1. Reunión inicial gratuita.
        </Paragraph>
        <Paragraph className="text-base">
          2. Análisis del negocio y propuesta personalizada.
        </Paragraph>
        <Paragraph className="text-base">
          3. Diseño visual y estructura orientada a resultados.
        </Paragraph>
        <Paragraph className="text-base">
          4. Desarrollo, pruebas y optimización.
        </Paragraph>
        <Paragraph className="text-base">
          5. Entrega final y soporte post-lanzamiento.
        </Paragraph>

        <Paragraph className="text-base">
          Todo el proceso es{" "}
          <Highlighted>claro, ordenado y transparente</Highlighted>.
        </Paragraph>
      </SectionContainer>

      <SectionContainer>
        <Title>Nuestro equipo</Title>

        {/* Fundadores */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2">
            Fundadores
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-primary/50 to-secondary text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md">
                  SEO & Fundador
                </span>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <img
                      className="w-28 h-28 object-cover rounded-full border-4 border-primary/20 shadow-lg"
                      src="/nicoplacente.webp"
                      alt="Nicolás Placente"
                      title="Nicolás Placente"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">NP</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-2xl sm:mt-2 text-white">
                      Nicolás Placente
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                      Liderazgo técnico y gestión empresarial
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <PortfolioButtons
                        href="https://nicoplacente.codeluxe.tech/"
                        aria="Portfolio de Nicolás Placente"
                      >
                        Ver portfolio
                      </PortfolioButtons>
                      <Link
                        href="https://linkedin.com/in/nicoplacente"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Nicolás Placente"
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm rounded-xl transition duration-300 gap-2 shadow-md hover:shadow-lg"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-secondary to-primary/50 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md">
                  Cofundador & Presidente
                </span>
              </div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <img
                      className="w-28 h-28 object-cover rounded-full border-4 border-secondary/20 shadow-lg"
                      src="/tiago.webp"
                      alt="Tiago Navarro"
                      title="Tiago Navarro"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">TN</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-2xl sm:mt-2 text-white">
                      Tiago Navarro
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
                      Dirección estratégica y administración general
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <PortfolioButtons
                        href="https://navarrotiago.codeluxe.tech/"
                        aria="Portfolio de Tiago Navarro"
                      >
                        Ver portfolio
                      </PortfolioButtons>
                      <Link
                        href="https://www.linkedin.com/in/tiago-navarro0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Tiago Navarro"
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm rounded-xl transition duration-300 gap-2 shadow-md hover:shadow-lg"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Programadores */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2">
            Programadores
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programadores.map((persona, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-700 hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      className="w-16 h-16 object-cover rounded-full border-2 border-gray-600"
                      src={persona.imagen}
                      alt={persona.nombre}
                      title={persona.nombre}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {persona.nombre
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      {persona.nombre}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                      Desarrollador Full Stack
                    </p>
                    <Link
                      href={persona.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${persona.nombre}`}
                      className="inline-flex items-center hover:underline text-blue-600 hover:text-blue-700 text-sm font-medium gap-1 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Marketing y Ventas */}
        <div className="mb-12">
          <h4 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2">
            Marketing y Ventas
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketing.map((persona, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-700 hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      className="w-16 h-16 object-cover rounded-full border-2 border-gray-600"
                      src={persona.imagen}
                      alt={persona.nombre}
                      title={persona.nombre}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {persona.nombre
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      {persona.nombre}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                      Marketing Digital
                    </p>
                    <Link
                      href={persona.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${persona.nombre}`}
                      className="inline-flex items-center hover:underline text-blue-600 hover:text-blue-700 text-sm font-medium gap-1 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Diseñadores */}
        <div className="mb-8">
          <h4 className="text-xl font-bold mb-6 text-primary border-b border-primary/20 pb-2">
            Diseñadores
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disenadores.map((persona, index) => (
              <article
                key={index}
                className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-700 hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      className="w-16 h-16 object-cover rounded-full border-2 border-gray-600"
                      src={persona.imagen}
                      alt={persona.nombre}
                      title={persona.nombre}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {persona.nombre
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      {persona.nombre}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                      Diseñador
                    </p>
                    <Link
                      href={persona.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${persona.nombre}`}
                      className="inline-flex items-center hover:underline text-blue-600 hover:text-blue-700 text-sm font-medium gap-1 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
