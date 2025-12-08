import Title from "@/ui/title";
import FAQs from "@/page-sections/faqs";
import FormPreview from "@/page-sections/form-preview";
import Link from "next/link";

export default function Propuesta() {
  return (
    <main className="flex flex-col gap-4 max-w-4xl sm:my-12 mx-auto">
      <div className="flex flex-col gap-2">
        <Title>Envía tu propuesta</Title>
        <h2 className="!text-secondary-txt text-pretty text-base">
          Describa su proyecto, puedes adjuntar archivos de referencia si lo
          desea o contactarnos directamente por{" "}
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
        </h2>
      </div>
      <FormPreview />
    </main>
  );
}
