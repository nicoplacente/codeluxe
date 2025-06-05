import Title from "@/ui/title";
import { IconFileUpload } from "@tabler/icons-react";
import SubmitButton from "@/components/submit-button";
import SubTitle from "@/ui/sub-title";

export default function Propuesta() {
  return (
    <main className="flex flex-col">
      <Title>Envía tu propuesta</Title>
      <h2 className="!text-secondary-txt text-pretty max-w-md md:hidden mt-6 text-sm">
        Describa su proyecto (Puedes adjuntar un archivo de referencia si lo
        desea)
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-12 my-6">
        <div className="flex flex-col gap-6">
          <h2 className="!text-secondary-txt text-pretty max-w-md hidden md:block">
            Describa su proyecto (Puedes adjuntar un archivo de referencia si lo
            desea)
          </h2>

          <section>
            <SubTitle className="text-2xl !text-white/90">
              Preguntas frecuentes
            </SubTitle>
            <article className="flex flex-col gap-4 my-4">
              <details className="border-2 border-secondary rounded-xl hover:bg-black/30 transition duration-300 cursor-pointer">
                <summary className="text-primary-txt text-sm sm:text-base marker:text-xs px-4 py-2">
                  pregunta 1
                </summary>
                <p className="text-xs sm:text-sm text-secondary-txt pl-4 my-2">
                  respuesta a la pregunta 1 xd xd xdddd
                </p>
              </details>

              <details className="border-2 border-secondary rounded-xl hover:bg-black/30 transition duration-300 cursor-pointer">
                <summary className="text-primary-txt text-sm sm:text-base marker:text-xs px-4 py-2">
                  pregunta 1
                </summary>
                <p className="text-xs sm:text-sm text-secondary-txt pl-4 my-2">
                  respuesta a la pregunta 1 xd xd xdddd
                </p>
              </details>

              <details className="border-2 border-secondary rounded-xl hover:bg-black/30 transition duration-300 cursor-pointer">
                <summary className="text-primary-txt text-sm sm:text-base marker:text-xs px-4 py-2">
                  pregunta 1
                </summary>
                <p className="text-xs sm:text-sm text-secondary-txt pl-4 my-2">
                  respuesta a la pregunta 1 xd xd xdddd
                </p>
              </details>
            </article>
          </section>
        </div>

        <form
          action="#"
          className="form-propuesta text-secondary-txt flex flex-col gap-4 flex-1"
        >
          <input
            id="name"
            type="text"
            placeholder="Nombre y Apellido"
            name="name"
          />

          <input id="email" type="email" placeholder="Correo" name="email" />

          <input id="subject" type="text" placeholder="Asunto" name="subject" />

          <input id="phone" type="text" placeholder="Teléfono" name="phone" />

          <div className="coolinput relative">
            <textarea
              id="description"
              placeholder="Mensaje"
              name="description"
              className="input"
            ></textarea>

            <label
              className="absolute bottom-0 right-0 cursor-pointer p-2 active:text-primary hover:bg-black/20 rounded-xl transition-colors"
              htmlFor="uploadFile"
              title="Adjuntar archivo"
            >
              <IconFileUpload />
            </label>

            <input
              id="uploadFile"
              type="file"
              name="reference"
              className="hidden"
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </main>
  );
}
