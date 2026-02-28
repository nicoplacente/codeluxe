import SectionContainer from "@/components/section-container";
import CallToAction from "@/components/call-to-action";
import Paragraph from "@/ui/paragraph";
import Title from "@/ui/title";
import Highlighted from "@/components/highlighted";
import FounderCard from "@/components/team-cards/founder-card";
import TeamSection from "@/components/team-cards/team-section";
import { TEAM } from "@/utils/constants";

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
            <FounderCard
              nombre="Nicolás Placente"
              imagen="/nicoplacente.webp"
              descripcion="Liderazgo técnico y gestión empresarial"
              portfolioHref="https://nicoplacente.codeluxe.tech/"
              portfolioAria="Portfolio de Nicolás Placente"
              linkedinHref="https://linkedin.com/in/nicoplacente"
              linkedinAria="LinkedIn de Nicolás Placente"
              badgeText="SEO & Fundador"
              badgeGradient="from-primary/50 to-secondary"
              inicialBadgeColor="bg-primary"
            />

            <FounderCard
              nombre="Tiago Navarro"
              imagen="/tiago.webp"
              descripcion="Dirección estratégica y administración general"
              portfolioHref="https://navarrotiago.codeluxe.tech/"
              portfolioAria="Portfolio de Tiago Navarro"
              linkedinHref="https://www.linkedin.com/in/tiago-navarro0/"
              linkedinAria="LinkedIn de Tiago Navarro"
              badgeText="Cofundador & Presidente"
              badgeGradient="from-secondary to-primary/50"
              inicialBadgeColor="bg-secondary"
            />
          </div>
        </div>

        <TeamSection
          title="Programadores"
          teamMembers={TEAM.devs}
          role="Desarrollador Full Stack"
        />

        <TeamSection
          title="Marketing y Ventas"
          teamMembers={TEAM.marketing}
          role="Marketing Digital"
        />

        <TeamSection
          title="Diseñadores"
          teamMembers={TEAM.designers}
          role="Diseñador"
        />
      </SectionContainer>
    </div>
  );
}
