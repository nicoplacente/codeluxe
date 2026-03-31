import Link from "next/link";

import SectionContainer from "@/components/section-container";
import Title from "@/ui/title";
import SubTitle from "@/ui/sub-title";
import Paragraph from "@/ui/paragraph";
import CallToAction from "@/components/call-to-action";
import { IconCheck } from "@tabler/icons-react";

const whatsappNumber = "5492926402409";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generateMetadata() {
  return {
    title: "Precios | CODELUXE",
    description:
      "Conocé los precios de nuestros servicios de desarrollo web, sistemas y marketing digital.",
    alternates: {
      canonical: "/precios/",
    },
    openGraph: {
      url: "https://codeluxe.tech/precios/",
    },
  };
}

const mainServices = [
  {
    name: "Landing page profesional",
    highlight: "Presencia online profesional",
    description:
      "Ideal para lanzar una campaña, presentar un servicio o captar leads de forma clara y efectiva.",
    price: "$300.000",
    priceNote: "Pago único",
    details: [
      "Presencia online profesional",
      "Diseño optimizado para conversión",
      "Carga rápida",
      "Adaptación a móviles",
    ],
    cta: "Solicitar este servicio",
    pricingType: "fixed",
    includesDomain: false,
  },
  {
    name: "Página corporativa",
    highlight: "Imagen sólida para tu empresa",
    description:
      "Sitio institucional pensado para mostrar quién sos, qué hacés y por qué elegirte.",
    price: "Desde $500.000",
    priceNote: "+ $80.000/mes",
    details: [
      "Imagen sólida para tu empresa",
      "Secciones autoadministrables",
      "Escalable a futuro",
      "Soporte técnico",
    ],
    cta: "Solicitar este servicio",
    pricingType: "from",
    includesDomain: true,
  },
  {
    name: "Aplicación web",
    highlight: "Automatización de procesos",
    description:
      "Aplicaciones accesibles desde cualquier dispositivo para acompañar el crecimiento de tu negocio.",
    price: "Desde $1.200.000",
    priceNote: "+ $120.000/mes",
    details: [
      "Automatización de procesos",
      "Acceso desde cualquier lugar",
      "Escalable",
      "Seguridad y backups",
    ],
    cta: "Solicitar este servicio",
    pricingType: "from",
    includesDomain: true,
  },
  {
    name: "Sistema de gestión",
    highlight: "Control total de tu negocio",
    description:
      "Soluciones a medida para administrar ventas, stock, clientes y operaciones en un solo lugar.",
    price: "Desde $3.000.000",
    priceNote: "+ $120.000/mes",
    details: [
      "Control total de tu negocio",
      "Ahorro de tiempo operativo",
      "Datos centralizados",
      "Adaptado a tu flujo de trabajo",
    ],
    cta: "Solicitar este servicio",
    pricingType: "from",
    includesDomain: true,
  },
  {
    name: "Tienda online",
    highlight: "Ventas 24/7",
    description:
      "Ecommerce profesional para vender tus productos de forma segura y escalable.",
    price: "Desde $1.500.000",
    priceNote: "+ $100.000/mes",
    details: [
      "Ventas 24/7",
      "Integración con pagos",
      "Gestión de productos",
      "Reportes de ventas",
    ],
    cta: "Solicitar este servicio",
    pricingType: "from",
    includesDomain: true,
  },
  {
    name: "Portfolio profesional",
    highlight: "Marca personal profesional",
    description:
      "Mostrá tu trabajo de forma clara, moderna y lista para compartir.",
    price: "$300.000",
    priceNote: "Pago único",
    details: [
      "Marca personal profesional",
      "Ideal para freelancers",
      "Diseño moderno",
      "Optimizado para compartir",
    ],
    cta: "Solicitar este servicio",
    pricingType: "fixed",
    includesDomain: false,
  },
  // {
  //   name: "CRM adaptable",
  //   highlight: "Seguimiento de clientes",
  //   description:
  //     "Centralizá tus contactos, oportunidades y ventas en una herramienta pensada para tu negocio.",
  //   price: "Desde $3.000.000",
  //   priceNote: "+ $150.000/mes",
  //   details: ["Seguimiento de clientes", "Automatización de ventas", "Métricas claras", "Escalable"],
  //   cta: "Solicitar este servicio",
  //   pricingType: "from",
  //   includesDomain: true,
  // },
];

export default function PreciosPage() {
  return (
    <main className="max-w-5xl mx-auto flex flex-col gap-8 py-10  text-primary-txt">
      <SectionContainer className="bg-transparent border-none shadow-none p-0">
        <div className="flex flex-col gap-4">
          <Title>Precios claros, resultados reales</Title>
          <Paragraph className="text-sm sm:text-base">
            Diseñamos y desarrollamos soluciones digitales pensadas para que tu
            proyecto crezca de forma sostenible. Estos precios son una guía para
            que puedas entender las inversiones típicas según el tipo de
            servicio que necesitás.
          </Paragraph>

          <div className="rounded-xl italic border border-warning bg-glass-warning/80 px-4 py-3 text-xs sm:text-sm flex flex-col gap-2">
            <p className="font-medium text-warning">
              Importante sobre los precios publicados
            </p>
            <Paragraph className="text-xs sm:text-sm">
              Los precios mostrados son valores base y pueden variar según la
              complejidad del proyecto. Te recomendamos leer nuestros{" "}
              <Link
                href="/terminos"
                className="font-semibold text-primary hover:underline"
                aria-label="Leer Términos y Condiciones de Codeluxe"
              >
                Términos y Condiciones
              </Link>{" "}
              antes de contratar.
            </Paragraph>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer
        id="servicios-principales"
        className="bg-transparent sm:bg-glass px-0 sm:px-6 border-none backdrop-blur-none shadow-none sm:border sm:border-primary-txt/10 sm:backdrop-blur-md sm:shadow-secondary/10"
      >
        <SubTitle className="text-2xl">Servicios principales</SubTitle>
        <Paragraph className="text-sm">
          Cada servicio está pensado para resolver una necesidad concreta de tu
          negocio, con foco en resultados y en el acompañamiento a largo plazo.
        </Paragraph>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mainServices.map((service) => (
            <li
              key={service.name}
              className="flex flex-col justify-between gap-4 bg-secondary/50 p-5 sm:p-6 border border-primary-txt/10 rounded-xl transition-transform duration-200 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <SubTitle className="text-base sm:text-lg text-balance">
                    {service.name}
                  </SubTitle>
                  {service.pricingType === "from" && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Pago único + abono mensual
                    </span>
                  )}
                  {service.pricingType === "fixed" && (
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      Pago único
                    </span>
                  )}
                  {service.pricingType === "custom" && (
                    <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">
                      Precio según ahorro
                    </span>
                  )}
                </div>

                <Paragraph className="text-xs sm:text-sm">
                  {service.description}
                </Paragraph>

                <div className="mt-2 flex flex-col gap-1">
                  <p className="text-xs uppercase tracking-wide text-primary/80">
                    Beneficios incluidos
                  </p>
                  <ul className="space-y-1 text-sm">
                    {service.details.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 text-primary">
                          <IconCheck className="size-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-xl sm:text-2xl font-semibold text-primary">
                    {service.price}
                  </p>
                  <p className="text-xs text-primary-txt/80 text-right">
                    {service.priceNote}
                  </p>
                </div>

                {service.includesDomain && (
                  <p className="text-[11px] sm:text-xs text-primary-txt/70">
                    Dominio profesional incluido mientras mantengas el abono
                    mensual activo.
                  </p>
                )}

                <CallToAction
                  href={buildWhatsAppUrl(
                    `Hola, me interesa el servicio "${service.name}" de Codeluxe (${service.price} ${service.priceNote}). ¿Podemos hablar para ver si se adapta a mi proyecto?`,
                  )}
                  ariaLabel={`Solicitar servicio por WhatsApp: ${service.name}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {service.cta}
                </CallToAction>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer
        id="automatizacion-ia"
        className="border-primary/40 bg-secondary/60"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="inline-flex items-center w-fit rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Innovación
              </span>
              <SubTitle className="text-2xl">Automatización con IA</SubTitle>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1">
              <p className="text-sm text-primary-txt/80">
                Inversión personalizada
              </p>
              <p className="text-3xl font-semibold text-accent">
                Según impacto
                {/* <span className="ml-1 text-sm text-primary-txt/80 font-normal">
                  generando ahorro real
                </span> */}
              </p>
              <p className="text-xs text-primary-txt/70">
                Pagá según el tiempo y gastos que te ahorremos mes a mes
              </p>
            </div>
          </div>

          <Paragraph className="text-sm">
            Transformá tareas repetitivas en procesos automáticos que ahorran
            tiempo y reducen gastos operativos. Nuestra IA se encarga del
            trabajo pesado para que te enfoques en hacer crecer tu negocio.
          </Paragraph>

          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary">
                <IconCheck className="size-4" />
              </span>
              <span>Ahorro de horas semanales de trabajo manual</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary">
                <IconCheck className="size-4" />
              </span>
              <span>Reducción mensual de gastos operativos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary">
                <IconCheck className="size-4" />
              </span>
              <span>Procesos 100% automáticos sin intervención humana</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-primary">
                <IconCheck className="size-4" />
              </span>
              <span>Escalable sin esfuerzo extra ni costos adicionales</span>
            </li>
          </ul>

          <CallToAction
            href={buildWhatsAppUrl(
              "Hola, me interesa la Automatización con IA de Codeluxe. Quiero calcular cuánto puedo ahorrar en tiempo y gastos.",
            )}
            ariaLabel="Solicitar automatización con IA por WhatsApp"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Calcular mi ahorro
          </CallToAction>
        </div>
      </SectionContainer>

      <SectionContainer
        id="combo-destacado"
        className="border-primary/40 bg-secondary/60"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="inline-flex items-center w-fit rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Oferta
              </span>
              <SubTitle className="text-2xl">
                Combo Landing + Gestión de redes
              </SubTitle>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1">
              <p className="text-sm text-primary-txt/80">Inversión total</p>
              <p className="text-3xl font-semibold text-primary">
                $250.000
                <span className="ml-1 text-sm text-primary-txt/80 font-normal">
                  + $400.000/mes
                </span>
              </p>
              <p className="text-xs text-primary-txt/70">
                <span className="line-through mr-1">
                  Landing $300.000 + Gestión de redes $500.000/mes
                </span>
                Ahora ahorrás en setup y abono mensual.
              </p>
            </div>
          </div>

          <Paragraph className="text-sm">
            Ideal para negocios que necesitan presencia digital completa: una
            landing optimizada para conversión y una estrategia constante en
            redes sociales para atraer clientes.
          </Paragraph>

          <div className="flex flex-col sm:flex-row gap-4">
            <ul className="flex-1 space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="size-4" />
                </span>
                <span>Landing page enfocada en conversión</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="size-4" />
                </span>
                <span>Estrategia de contenidos alineada a tus objetivos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="size-4" />
                </span>
                <span>Diseño profesional de posteos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="size-4" />
                </span>
                <span>Acompañamiento mensual y análisis de resultados</span>
              </li>
            </ul>
          </div>

          <CallToAction
            href={buildWhatsAppUrl(
              "Hola, me interesa el Combo Landing + Gestión de redes de Codeluxe ($250.000 + $400.000/mes). Quisiera más información y ver si se adapta a mi negocio.",
            )}
            ariaLabel="Solicitar combo Landing + Gestión de redes por WhatsApp"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Quiero este combo
          </CallToAction>
        </div>
      </SectionContainer>

      <SectionContainer id="gestion-de-redes">
        <SubTitle className="text-2xl">Gestión de redes sociales</SubTitle>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1 flex flex-col gap-2">
            <Paragraph className="text-sm">
              Manejamos la presencia de tu marca en redes sociales para que
              puedas enfocarte en tu negocio. Nos ocupamos de la estrategia, el
              diseño y la comunicación.
            </Paragraph>

            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="size-4" />
                </span>
                <span>Estrategia de contenido alineada a tus objetivos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="size-4" />
                </span>
                <span>Diseño profesional de piezas y posteos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="size-4" />
                </span>
                <span>Crecimiento de marca y comunidad</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <IconCheck className="size-4" />
                </span>
                <span>Atracción de clientes potenciales</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <p className="text-sm text-primary-txt/80">Inversión mensual</p>
            <p className="text-3xl font-semibold text-primary">$500.000/mes</p>

            <CallToAction
              href={buildWhatsAppUrl(
                "Hola, me interesa el servicio de Gestión de redes sociales de Codeluxe ($500.000/mes). Me gustaría que me cuenten cómo trabajan y qué incluye el servicio.",
              )}
              ariaLabel="Solicitar servicio de gestión de redes sociales por WhatsApp"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Solicitar gestión de redes
            </CallToAction>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="cta-final">
        <div className="flex flex-col gap-4 items-start">
          <SubTitle className="text-2xl">¿Necesitás algo a medida?</SubTitle>
          <Paragraph className="text-base">
            También desarrollamos soluciones personalizadas para proyectos
            únicos, integraciones especiales o sistemas internos pensados
            exclusivamente para tu negocio.
          </Paragraph>
          <CallToAction
            href={buildWhatsAppUrl(
              "Hola, necesito una solución a medida para mi proyecto y me gustaría solicitar un presupuesto personalizado.",
            )}
            ariaLabel="Solicitar presupuesto a medida por WhatsApp"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Solicitar presupuesto
          </CallToAction>
        </div>
      </SectionContainer>
    </main>
  );
}
