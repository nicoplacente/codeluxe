import CallToAction from "@/components/call-to-action";
import SectionContainer from "@/components/section-container";
import Title from "@/ui/title";
import Paragraph from "@/ui/paragraph";
import SubTitle from "@/ui/sub-title";
import CardProccess from "@/components/card-proccess";
import { benefits, ownProcess, services } from "@/utils/constants";
import Hero from "@/page-sections/hero";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionContainer>
        <Title>Impulsamos tu marca con diseño web estratégico</Title>
        <Paragraph className="text-sm">
          +3 años de experiencia en la creación de portfolios, landings, tiendas
          online y proyectos profesionales, identidad visual y estrategias de
          marketing digital orientadas a que creativos y profesionales consigan
          clientes o empleo de manera autónoma.
        </Paragraph>

        <CallToAction />
      </SectionContainer>

      <SectionContainer>
        <SubTitle className="text-xl">Beneficios</SubTitle>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-secondary/50 p-6 border border-primary-txt/10 rounded-xl"
            >
              <span className="text-primary  bg-primary/20 rounded-2xl p-2">
                <benefit.icon className="size-9" />
              </span>

              <div>
                <SubTitle className="text-sm">{benefit.title}</SubTitle>
                <Paragraph className="text-xs">{benefit.description}</Paragraph>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer>
        <SubTitle className="text-xl">Servicios</SubTitle>
        <Paragraph className="text-sm">
          Podés complementar tu sitio web con uno o más de nuestros servicios
          opcionales:{" "}
          <strong className="font-semibold">
            soporte, SEO, gestión y actualizaciones
          </strong>
          . Contratá todos juntos y obtené un{" "}
          <strong className="font-semibold">descuento exclusivo</strong>. Si
          quieres mas información haz click{" "}
          <Link
            className="font-semibold text-primary hover:underline"
            href="/propuesta"
            aria-label="Más información"
          >
            aquí
          </Link>
        </Paragraph>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-secondary/50 p-6 border border-primary-txt/10 rounded-xl"
            >
              <span className="text-primary  bg-primary/20 rounded-2xl p-2">
                <service.icon className="size-9" />
              </span>

              <div>
                <SubTitle className="text-sm">{service.title}</SubTitle>
                <Paragraph className="text-xs">{service.description}</Paragraph>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer>
        <SubTitle className="text-xl">Nuestro proceso</SubTitle>
        <article className="flex flex-col sm:flex-row justify-center items-center w-full gap-2">
          {ownProcess.map((e, index) => (
            <CardProccess
              key={index}
              title={e.title}
              svgIcon={e.icon}
              isArrow={index < ownProcess.length - 1}
            />
          ))}
        </article>
      </SectionContainer>
    </>
  );
}
