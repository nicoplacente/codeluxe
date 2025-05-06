import SectionContainer from "@/components/section-container";
import ButtonComponent from "@/ui/button-component";
import Paragraph from "@/ui/paragraph";
import SubTitle from "@/ui/sub-title";
import Title from "@/ui/title";

export default function Info() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto my-12">
      <SectionContainer>
        <Title>¿Quiénes somos?</Title>
        <Paragraph className="text-sm">
          Equipo de desarrolladores apasionados por crear soluciones digitales
          simples, efectivas y con una estética moderna.
        </Paragraph>

        <Paragraph className="text-sm">
          Nuestra misión es acompañar a negocios, marcas y emprendedores en su
          transformación digital, ofreciéndoles herramientas personalizadas,
          funcionales y fáciles de usar.
        </Paragraph>

        <Paragraph className="text-sm">
          Somos jóvenes, creativos, responsables y estamos convencidos de que la
          tecnología puede hacer que cualquier negocio brille. En Codeluxe, cada
          proyecto es una oportunidad para crecer, innovar y dejar huella.
        </Paragraph>

        <ButtonComponent />
      </SectionContainer>
      <div className="flex flex-col md:flex-row gap-6">
        <SectionContainer>
          <article className="flex gap-4">
            <img
              className="size-20 object-cover rounded-full"
              src="/nicoplacente.jpeg"
              alt="Nicolás Placente"
            />
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-semibold md:text-lg">Nicolás Placente</h3>
              <button className="bg-primary/50 px-4 py-2 rounded-xl">
                Ver porfolio
              </button>
            </div>
          </article>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam
            vel velit assumenda, et blanditiis repellendus porro quod! Incidunt
            reiciendis hic enim minus illum inventore omnis doloremque odit
            adipisci quod.
          </Paragraph>
        </SectionContainer>
        <SectionContainer>
          <article className="flex gap-4">
            <img
              className="size-20 object-cover rounded-full"
              src="tiago.jpg"
              alt="Tiago Navarro"
            />
            <div className="flex flex-col items-start gap-2">
              <h3 className="font-semibold md:text-lg">Tiago Navarro</h3>
              <button className="bg-primary/50 px-4 py-2 rounded-xl">
                Ver porfolio
              </button>
            </div>
          </article>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ullam
            vel velit assumenda, et blanditiis repellendus porro quod! Incidunt
            reiciendis hic enim minus illum inventore omnis doloremque odit
            adipisci quod.
          </Paragraph>
        </SectionContainer>
      </div>
    </div>
  );
}
