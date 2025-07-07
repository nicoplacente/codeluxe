import {
  IconBellRinging,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
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
} from "@tabler/icons-react";

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

export const navOptions = [
  {
    title: "Sobre Nosotros",
    href: "/info",
    icon: IconInfoCircle,
    target: "_self",
  },
  {
    title: "Whatsapp",
    href: "https://wa.me/2926402409",
    icon: IconBrandWhatsapp,
    target: "_blank",
  },
  {
    title: "Correo",
    href: "mailto:codeluxetech@gmail.com",
    icon: IconMail,
    target: "_blank",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/company/codeluxee/",
    icon: IconBrandLinkedin,
    target: "_blank",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/codeluxe_/",
    icon: IconBrandInstagram,
    target: "_blank",
  },
  // {
  //   title: "TikTok",
  //   href: "https://www.tiktok.com/@codeluxe3",
  //   icon: IconBrandTiktok,
  //   target: "_blank",
  // },
];

export const FAQs = [
  {
    id: 1,
    question:
      "¿Puedo contratar o cancelar los servicios opcionales en cualquier momento?",
    p1: "Sí, los servicios opcionales pueden contratarse o cancelarse en cualquier momento. Podés elegir uno o varios según tus necesidades, y si contratás todos juntos, accedés a un descuento exclusivo.",
    p2: "Solo abonás el desarrollo de la app o página web como un pago único. Incluye un dominio gratuito del tipo tu-pagina.vercel.app. Más adelante podés contratar mantenimiento o dominio personalizado y profesional si lo deseás.",
  },
  {
    id: 2,
    question: "¿Hay reembolsos si cancelo el proyecto o un servicio?",
    p1: "No. El pago por la app o web es sin reembolso: se abona 50% al iniciar y 50% al finalizar. En el caso de los servicios adicionales (mantenimiento, dominio, etc.).",
    p2: "Podés dejar de pagarlos, darlos de baja o volver a contratarlos en cualquier momento sin penalidad.",
  },
  {
    id: 3,
    question: "¿Cuánto tiempo demora el desarrollo de una web o aplicación?",
    p1: "Depende de la complejidad del proyecto. Una landing page simple puede entregarse en 2 a 5 días hábiles. Un desarrollo más personalizado puede demorar entre 1 y 4 semanas. En casos complejos, el plazo puede ser indeterminado, pero siempre será informado con anticipación.",
    p2: "El proceso comienza una vez realizado el primer pago del 50%, y no se entrega el producto final ni se habilita el dominio hasta completar el 100% del pago, según lo establecido en los términos y condiciones.",
  },
  {
    id: 4,
    question: "¿Cómo se realiza la contratación y qué métodos de pago aceptan?",
    p1: "Para comenzar, se definen los requisitos y se realiza un anticipo del 50%. El resto se abona al finalizar luego de ser entregada la página.",
    p2: "Aceptamos Mercado Pago, Transferencia Bancaria y Criptomonedas.",
  },
];
