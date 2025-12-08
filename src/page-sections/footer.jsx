import Link from "next/link";
import { contactOptions } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="shadow-sm">
      <div className="w-full max-w-4xl mx-auto p-4 lg:px-0 md:py-8">
        <div
          className="
            flex flex-col 
            sm:flex-row 
            sm:justify-between 
            sm:items-start 
            md:items-center 
            gap-4 mb-6
          "
        >
          <Link
            href="/"
            aria-label="Inicio"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo-codeluxe.webp"
              className="h-8 rounded-full active:scale-90 hover:contrast-50 transition cursor-pointer hover:shadow-2xl hover:shadow-primary/50"
              alt="Logo Codeluxe"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-txt">
              Codeluxe
            </span>
          </Link>

          <ul
            className="
              flex flex-col md:flex-row gap-4 sm:flex-wrap 
              [&>li>a]:p-2 md:[&>li>a]:p-0 
              sm:gap-2 
              text-sm 
              text-secondary-txt
            "
          >
            <li>
              <Link
                href="/info"
                className="hover:underline me-4 md:me-6"
                aria-label="Sobre nosotros"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/terminos"
                className="hover:underline me-4 md:me-6"
                aria-label="Términos y condiciones"
              >
                Términos y condiciones
              </Link>
            </li>
            <li>
              <Link
                href="/propuesta"
                className="hover:underline"
                aria-label="Solicitá una propuesta"
              >
                Enviá tu propuesta
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-primary/10 sm:mx-auto lg:my-8" />

        <div
          className="
            flex flex-col 
            gap-4 mb-6 
            sm:flex-row 
            sm:justify-between 
            sm:items-center
          "
        >
          <p className="text-secondary-txt text-sm">
            Contáctanos directamente:
          </p>

          <div className="flex space-x-4">
            {contactOptions.map((option) => (
              <Link
                key={option.title}
                href={option.href}
                target="_blank"
                title={option.title}
                rel="noopener noreferrer nofollow"
                aria-label={option.title}
                className="
                  text-secondary-txt 
                  hover:text-primary 
                  hover:bg-primary/10 
                  p-2 
                  rounded-full 
                  transition-all 
                  duration-300
                  border 
                  border-transparent 
                  hover:border-primary/50
                "
              >
                <option.icon className="size-6" />
              </Link>
            ))}
          </div>
        </div>

        <hr className="my-6 border-primary/10 sm:mx-auto lg:my-8" />

        <span className="block text-sm text-secondary-txt sm:text-center ">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline" aria-label="Inicio">
            Codeluxe™
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
