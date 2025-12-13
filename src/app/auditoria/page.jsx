import FormAudit from "@/components/form-audit";
import SectionContainer from "@/components/section-container";
import Paragraph from "@/ui/paragraph";
import Title from "@/ui/title";

export function generateMetadata() {
  return {
    title: "Auditoría Web | Codeluxe",
    description:
      "Solicita una auditoría web gratuita y descubre los problemas de tu sitio web y cómo solucionarlos.",
    alternates: {
      canonical: "/auditoria",
    },
    openGraph: {
      title: "Auditoría Web | Codeluxe",
      description:
        "Solicita una auditoría web gratuita y descubre los problemas de tu sitio web y cómo solucionarlos.",
      images: ["https://codeluxe.tech/logo-codeluxe-metadata.png"],
    },
    twitter: {
      title: "Auditoría Web | Codeluxe",
      description:
        "Solicita una auditoría web gratuita y descubre los problemas de tu sitio web y cómo solucionarlos.",
    },
  };
}

export default function AuditPage() {
  return (
    <SectionContainer className="max-w-4xl sm:my-12 mx-auto">
      <Title>Solicita tu Auditoría Web Gratuita</Title>

      <Paragraph className="text-base">
        Descubre los puntos débiles de tu sitio web actual. Analizaremos la
        **velocidad de carga**, la **estructura SEO** y la **usabilidad** de tu
        página. Te enviaremos un informe detallado con las mejoras clave para
        convertir más visitas en clientes.
      </Paragraph>

      <Paragraph className="text-sm italic p-3 rounded-lg bg-glass-warning border border-warning">
        ✅ **Recuerda:** Solo auditamos sitios web que usan el protocolo
        **HTTPS** para enfocarnos en las mejores prácticas de seguridad.
      </Paragraph>

      <FormAudit />
    </SectionContainer>
  );
}
