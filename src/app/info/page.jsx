import SectionContainer from "@/components/section-container";
import ButtonComponent from "@/ui/button-component";
import Paragraph from "@/ui/paragraph";
import SubTitle from "@/ui/sub-title";
import Title from "@/ui/title";

export default function Info() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-6 w-full max-w-4xl mx-auto my-12">
      <div className="col-span-4 row-span-1">
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
            Somos jóvenes, creativos, responsables y estamos convencidos de que
            la tecnología puede hacer que cualquier negocio brille. En Codeluxe,
            cada proyecto es una oportunidad para crecer, innovar y dejar
            huella.
          </Paragraph>

          <ButtonComponent />
        </SectionContainer>
      </div>
      <div className="col-span-2 row-start-2">
        <SectionContainer>
          <article className="flex items-start gap-2">
            <img
              className="size-32 object-cover rounded-full"
              src="/nicoplacente.jpeg"
              alt="Nicolás Placente"
            />
            <h3>Nicolás Placente</h3>
          </article>
          <ButtonComponent />
        </SectionContainer>
      </div>
      <div className="col-span-2 col-start-3 row-start-2">
        <SectionContainer>
          <article className="flex items-start gap-2">
            <img
              className="size-32 object-cover rounded-full"
              src="tiago.jpg"
              alt="Tiago Navarro"
            />
            <h3>Tiago Navarro</h3>
          </article>
          <ButtonComponent />
        </SectionContainer>
      </div>
    </div>
  );
}
