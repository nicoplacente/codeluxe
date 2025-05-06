import SectionContainer from "@/components/section-container";
import ButtonComponent from "@/ui/button-component";
import Title from "@/ui/title";
import { IconFileUpload } from "@tabler/icons-react";

export default function Propuesta() {
  return (
    <section>
      <Title>Envia tu propuesta</Title>

      <form action="#" className="text-secondary-txt flex flex-col gap-6 my-12">
        <div className="coolinput">
          <label htmlFor="name" className="text">
            Nombre y apellido
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            name="name"
            className="input"
          />
        </div>

        <div className="coolinput">
          <label htmlFor="email" className="text">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="johndoe@ejemplo.com"
            name="email"
            className="input"
          />
        </div>

        <div className="coolinput">
          <label htmlFor="subject" className="text">
            Asunto
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Quiero armar una landing"
            name="subject"
            className="input"
          />
        </div>

        <div className="coolinput">
          <label htmlFor="phone" className="text">
            Teléfono
          </label>
          <input
            id="phone"
            type="number"
            placeholder="2929222999"
            name="phone"
            className="input"
          />
        </div>

        <div>
          <div className="coolinput relative">
            <label htmlFor="description" className="text">
              Describa su proyecto (Puedes adjuntar un archivo de referencia si
              lo desea)
            </label>
            <textarea
              id="description"
              name="description"
              className="input"
            ></textarea>

            <label
              className="absolute bottom-0 right-0 cursor-pointer p-2 active:text-primary hover:bg-black/20 rounded-tl-lg transition-colors"
              htmlFor="uploadFile"
              title="Adjuntar archivo"
            >
              <IconFileUpload />
            </label>
          </div>

          <input
            id="uploadFile"
            type="file"
            name="reference"
            className="hidden"
          />
        </div>

        <ButtonComponent txt="Enviar propuesta" />
      </form>
    </section>
  );
}
