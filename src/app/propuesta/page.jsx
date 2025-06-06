import Title from "@/ui/title";
import FAQs from "@/page-sections/faqs";
import FormPreview from "@/page-sections/form-preview";

export default function Propuesta() {
  return (
    <main className="flex flex-col">
      <Title>Envía tu propuesta</Title>
      <h2 className="!text-secondary-txt text-pretty w-full pr-4 lg:hidden mt-6 text-sm">
        Describa su proyecto, puedes adjuntar archivos de referencia si lo desea
        (Se recomienda comprimir los archivos a un .zip)
      </h2>
      <div className="flex flex-col-reverse lg:flex-row gap-12 my-6">
        <div className="flex flex-col gap-6">
          <h2 className="!text-secondary-txt text-pretty max-w-sm text-sm hidden lg:block">
            Describa su proyecto, puedes adjuntar archivos de referencia si lo
            desea (Se recomienda comprimir los archivos a un .zip)
          </h2>
          <FAQs />
        </div>
        <FormPreview />
      </div>
    </main>
  );
}
