import {
  IconBellRinging,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrush,
  IconBulb,
  IconChartBarPopular,
  IconInfoCircle,
  IconMail,
  IconPencil,
  IconRocket,
  IconSearch,
  IconShieldDollar,
  IconHeadset,
  IconSeo,
  IconStackBack,
  IconProgressCheck,
  IconMessage,
  IconZoomQuestion,
  IconCurrencyDollar,
  IconReportSearch,
  IconBrandZoom,
} from "@tabler/icons-react";
import Link from "next/link";

export const benefits = [
  {
    title: "Aumento de ventas",
    description: "Transformá visitas en conversiones reales",
    icon: IconChartBarPopular,
  },
  {
    title: "Imagen profesional inmediata",
    description: "Llevá tu presencia online al siguiente nivel",
    icon: IconShieldDollar,
  },
  {
    title: "Mayor visibilidad y posicionamiento",
    description: "Atraé más clientes y destacate en tu rubro",
    icon: IconSearch,
  },
  {
    title: "Copywriting persuasivo",
    description: "Textos estratégicos que generan acción",
    icon: IconPencil,
  },
];

export const services = [
  {
    title: "Soporte y Escalabilidad",
    description: "Mantenemos tu sitio actualizado, seguro y listo para crecer.",
    icon: IconHeadset,
  },
  {
    title: "Dominio y Optimización SEO",
    description: "Mejoramos tu presencia online con SEO y gestión de dominio.",
    icon: IconSeo,
  },
  {
    title: "Actualizaciones y Cambios",
    description:
      "Realizamos ajustes en diseño, contenido o funcionalidades cuando los necesites.",
    icon: IconProgressCheck,
  },
  {
    title: "Gestión Integral",
    description: "Nos ocupamos de todo lo relacionado a tu sitio web.",
    icon: IconStackBack,
  },
];

export const ownProcess = [
  {
    title: "Propuesta",
    icon: IconBulb,
  },
  {
    title: "Diseño",
    icon: IconBrush,
  },
  {
    title: "Ejecución",
    icon: IconRocket,
  },
  {
    title: "Entrega",
    icon: IconBellRinging,
  },
];

export const contactOptions = [
  {
    title: "Whatsapp",
    href: "https://wa.me/5492926402409",
    icon: IconBrandWhatsapp,
  },
  {
    title: "Correo",
    href: "mailto:codeluxetech@gmail.com",
    icon: IconMail,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/company/codeluxee/",
    icon: IconBrandLinkedin,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/codeluxe_/",
    icon: IconBrandInstagram,
  },
];

export const navOptions = [
  {
    title: "Sobre Nosotros",
    href: "/info",
    icon: IconInfoCircle,
  },
  {
    title: "Beneficios",
    href: "/#beneficios",
    icon: IconCurrencyDollar,
  },
  {
    title: "Reservar Reunión",
    href: "/#consultas",
    icon: IconBrandZoom,
  },
  {
    title: "Auditoria",
    href: "/auditoria",
    icon: IconReportSearch,
  },
  {
    title: "Preguntas frecuentes",
    href: "/#faqs",
    icon: IconZoomQuestion,
  },
  {
    title: "Contacto",
    href: "/#contacto",
    icon: IconMessage,
  },
];

export const FAQs = [
  {
    id: 1,
    question: "¿Puedo no pagar mensualmente?",
    p1: (
      <>
        Sí, es posible únicamente en el caso de{" "}
        <strong>aplicaciones de gestión</strong> que funcionen con una{" "}
        <strong>base de datos local</strong>. Sin embargo, recomendamos abonar
        el <strong>servicio mensual del servidor</strong>, ya que ofrece
        beneficios esenciales como:{" "}
        <strong>copias de seguridad automáticas</strong>,{" "}
        <strong>mantenimiento constante</strong>,{" "}
        <strong>mayor seguridad</strong> y{" "}
        <strong>acceso multiplataforma</strong>. Para el resto de los proyectos
        —incluyendo <strong>sitios web</strong> y{" "}
        <strong>tiendas online</strong>— el pago mensual es{" "}
        <strong>obligatorio</strong> debido al mantenimiento del servidor, las
        copias de seguridad, seguridad activa y porque{" "}
        <strong>deben ser accesibles públicamente</strong>.
      </>
    ),
    p2: (
      <>
        Si no deseás contratar un dominio anual, ofrecemos sin costo un{" "}
        <strong>dominio gratuito</strong> del tipo{" "}
        <strong>tu-pagina.vercel.app</strong>. Más adelante podés adquirir un{" "}
        <strong>dominio personalizado y profesional</strong> cuando lo
        consideres necesario. Aun así, recomendamos invertir en un dominio
        propio, ya que suele ser <strong>económico</strong> y mejora
        significativamente la <strong>presencia y credibilidad</strong> de tu
        marca en internet.
      </>
    ),
  },
  {
    id: 2,
    question: "¿Hay reembolsos si cancelo el proyecto o un servicio?",
    p1: (
      <>
        No. El pago por la app o sitio web es sin reembolso. Los pagos
        realizados corresponden a tiempo, planificación y trabajo invertido, y{" "}
        <strong>no son reversibles</strong>.
      </>
    ),
  },
  {
    id: 3,
    question: "¿Cuánto tiempo demora el desarrollo de una web o aplicación?",
    p1: "La duración del desarrollo dependerá de la complejidad y personalización del proyecto: Mínimo estimado: 2 días hábiles. Máximo estimado: 1 mes. En casos complejos, el plazo podrá ser indeterminado, lo cual se informará previamente.",

    p2: "El proceso comienza una vez realizado el primer pago del 50%, y no se entregará el producto final ni se habilitará el dominio hasta completar el 100% del pago, según lo establecido en los términos y condiciones.",
  },
  {
    id: 4,
    question: "¿Cómo se realiza la contratación?",
    p1: "Para comenzar, se definen los requisitos y se realiza un anticipo del 50%. El resto se abona al finalizar luego de ser entregada la página.",
    p2: (
      <>
        <strong>
          Luego puedes enviar tu propuesta desde{" "}
          <Link
            href="/propuesta"
            aria-label="Enviar propuesta"
            className="font-semibol text-primary hover:underline"
          >
            aquí
          </Link>{" "}
          o contactarnos directamente por{" "}
          <Link
            href={`https://wa.me/5492926402409?text=${encodeURIComponent(
              "Hola! Quiero contratar tu servicio."
            )}`}
            className="font-semibol text-primary hover:underline"
            aria-label="Contactar por Whatsapp"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Whatsapp
          </Link>
        </strong>
        .
      </>
    ),
  },
  {
    id: 5,
    question: "¿Qué métodos de pago aceptan?",
    p1: (
      <>
        Aceptamos <strong>Transferencia y Criptomonedas</strong>.
      </>
    ),
  },

  {
    id: 6,
    question: "¿Cuál es el costo del proyecto?",
    p1: (
      <>
        El costo del desarrollo es un <strong>pago único</strong>, pero el
        precio final puede variar según el tipo de proyecto y su complejidad. Un
        proyecto <strong>simple</strong> puede comenzar alrededor de{" "}
        <strong>$300.000 ARS</strong>, mientras que un proyecto{" "}
        <strong>complejo</strong> puede costar{" "}
        <strong>$700.000 ARS o más</strong>, dependiendo de las funcionalidades
        necesarias.
      </>
    ),
    p2: (
      <>
        Para recibir un presupuesto exacto, recomendamos contactarnos por{" "}
        <Link
          href="https://wa.me/5492926402409"
          className="font-semibol text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="Contactar por Whatsapp"
        >
          Whatsapp
        </Link>{" "}
        y contarnos tu idea. Una vez definido el proyecto, se aplicarán los
        pagos mensuales correspondientes según lo establecido en la cláusula 6
        de los{" "}
        <Link
          href="/terminos"
          aria-label="Ver Términos y Condiciones"
          className="font-semibol text-primary hover:underline"
        >
          Términos y Condiciones
        </Link>
        .
      </>
    ),
  },
];
