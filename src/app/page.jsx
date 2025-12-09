import CallToAction from "@/components/call-to-action";
import SectionContainer from "@/components/section-container";
import Title from "@/ui/title";
import Paragraph from "@/ui/paragraph";
import SubTitle from "@/ui/sub-title";
import CardProccess from "@/components/card-proccess";
import { benefits, ownProcess, services } from "@/utils/constants";
import Hero from "@/page-sections/hero";
import FAQs from "@/page-sections/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionContainer>
        <Title>Impulsamos tu marca con diseño web estratégico</Title>
        <Paragraph className="text-base">
          Transformamos tu presencia online en una herramienta que atrae
          clientes y oportunidades. Con más de 3 años de experiencia, creamos
          portfolios, landing pages, tiendas online, sistemas de gestión y
          proyectos profesionales, combinando identidad visual y estrategias de
          marketing digital diseñadas para que creativos y profesionales
          consigan resultados reales. <br /> <br />
          <strong className="font-semibold text-white/90">
            Da el siguiente paso: envía tu propuesta y hagamos crecer tu
            proyecto.
          </strong>
        </Paragraph>

        <CallToAction href="/propuesta" ariaLabel="Enviá tu propuesta">
          Enviá tu propuesta
        </CallToAction>
      </SectionContainer>

      <SectionContainer id="beneficios">
        <SubTitle className="text-2xl">Beneficios</SubTitle>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-secondary/50 p-6 border border-primary-txt/10 rounded-xl"
            >
              <span className="text-primary bg-primary/20 rounded-2xl p-2">
                <benefit.icon className="size-9" />
              </span>

              <div>
                <SubTitle className="text-base text-balance">
                  {benefit.title}
                </SubTitle>
                <Paragraph className="text-sm">{benefit.description}</Paragraph>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer>
        <SubTitle className="text-2xl">Servicios</SubTitle>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-secondary/50 p-6 border border-primary-txt/10 rounded-xl"
            >
              <span className="text-primary bg-primary/20 rounded-2xl p-2">
                <service.icon className="size-9" />
              </span>

              <div>
                <SubTitle className="text-base text-balance">
                  {service.title}
                </SubTitle>
                <Paragraph className="text-sm">{service.description}</Paragraph>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer>
        <SubTitle className="text-2xl">Nuestro proceso</SubTitle>
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

      <SectionContainer id="consultas">
        <SubTitle className="text-2xl">
          Resuelve tus Dudas Sin Compromiso
        </SubTitle>
        <Paragraph className="text-base">
          ¿Tienes preguntas específicas sobre tu proyecto, necesitas un
          presupuesto personalizado o quieres entender mejor cómo trabajamos?
          Agenda una
          <strong className="font-semibold text-primary-txt">
            {" "}
            reunión virtual gratuita de 30 minutos
          </strong>{" "}
          con nuestro equipo. ¡Hablemos de tu visión!
        </Paragraph>

        <CallToAction
          href="https://calendly.com/codeluxetech/30min"
          ariaLabel="Reservar Reunión de Consultas Gratuita en Calendly"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Reservar mi Reunión Gratuita
        </CallToAction>
      </SectionContainer>

      <SectionContainer id="auditoria">
        <SubTitle className="text-2xl">
          ¿Ya tienes una Web? ¡Audítala Gratis!
        </SubTitle>
        <Paragraph className="text-base">
          Si ya tienes presencia online, ¡es hora de optimizarla! Te ofrecemos
          una{" "}
          <strong className="font-semibold text-primary-txt">
            Auditoría Web 100% gratuita
          </strong>{" "}
          donde analizaremos el diseño, la usabilidad, la velocidad y el SEO de
          tu página actual. Descubre los puntos críticos que te están impidiendo
          conseguir más clientes o visibilidad.
        </Paragraph>

        <Paragraph className="text-sm italic p-3 rounded-lg bg-glass-warning border border-warning">
          ⚠️ **Importante:** Para garantizar un análisis enfocado en la
          seguridad y las buenas prácticas modernas, nuestra auditoría se limita
          exclusivamente a sitios que utilizan el protocolo **HTTPS**.
        </Paragraph>

        <CallToAction
          href="/auditoria"
          ariaLabel="Solicitar Auditoría Web Gratuita"
          rel="noopener noreferrer nofollow"
        >
          Solicitar Auditoría Web Gratuita
        </CallToAction>
      </SectionContainer>

      <FAQs />
    </>
  );
}
