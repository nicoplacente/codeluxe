import SectionContainer from "../../components/section-container";
import CallToAction from "../../components/call-to-action";
import Paragraph from "../../ui/paragraph";
import Title from "../../ui/title";
import PortfolioButtons from "../../ui/portfolio-button";
import Highlight from "../../components/highlight";

export default function Info() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto sm:my-12">
      <SectionContainer>
        <Title>¿Quiénes somos?</Title>
        <Paragraph className="text-sm">
          Equipo de desarrolladores apasionados por crear{" "}
          <Highlight color="text-primary">
            soluciones digitales simples, efectivas y con una estética moderna.
          </Highlight>
        </Paragraph>

        <Paragraph className="text-sm">
          Nuestra misión es{" "}
          <Highlight>acompañar a negocios, marcas y emprendedores</Highlight> en
          su transformación digital, ofreciéndoles{" "}
          <Highlight color="text-primary">
            herramientas personalizadas, funcionales y fáciles de usar.
          </Highlight>
        </Paragraph>

        <Paragraph className="text-sm">
          Somos <Highlight>jóvenes, creativos, responsables</Highlight> y
          estamos convencidos de que{" "}
          <Highlight color="text-primary">
            la tecnología puede hacer que cualquier negocio brille.
          </Highlight>{" "}
          En <Highlight>Codeluxe</Highlight>, cada proyecto es una oportunidad
          para <Highlight>crecer, innovar y dejar huella.</Highlight>
        </Paragraph>

        <CallToAction href="/propuesta" ariaLabel="Enviá tu propuesta">
          Enviá tu propuesta
        </CallToAction>
      </SectionContainer>
      <div className="flex flex-col md:flex-row gap-6">
        <SectionContainer>
          <article className="flex items-center gap-4">
            <img
              className="size-20 object-cover rounded-full"
              src="/nicoplacente.webp"
              alt="Nicolás Placente"
            />
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-semibold md:text-lg">Nicolás Placente</h3>
              <PortfolioButtons
                href="https://nicoplacente.netlify.app/"
                aria="Portfolio de Nico Placente"
              >
                Ver porfolio
              </PortfolioButtons>
            </div>
          </article>
          {/* <Paragraph className="text-sm">
            Desarrollador fullstack especializado en frontend, copywriter y
            productor musical.
          </Paragraph> */}
        </SectionContainer>
        <SectionContainer>
          <article className="flex items-center gap-4">
            <img
              className="size-20 object-cover rounded-full"
              src="tiago.webp"
              alt="Tiago Navarro"
            />
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-semibold md:text-lg">Tiago Navarro</h3>
              <PortfolioButtons
                href="https://navarrotiago.vercel.app/"
                aria="Portfolio de Tiago Navarro"
              >
                Ver porfolio
              </PortfolioButtons>
            </div>
          </article>

          {/* <Paragraph className="text-sm">
            Desarrollador fullstack especializado en backend.
          </Paragraph> */}
        </SectionContainer>
      </div>
    </div>
  );
}
