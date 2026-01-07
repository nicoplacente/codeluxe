import { projects } from "@/utils/constants";
import Link from "next/link";
import Highlighted from "@/components/highlighted";

export function generateMetadata() {
  return {
    title: "Nuestros Proyectos | Codeluxe",
    description:
      "En Codeluxe no solo creamos aplicaciónes webs personalizadas para terceros. También desarrollamos tecnología de alto impacto bajo un modelo de suscripción diseñado para eliminar la fricción técnica, potenciar la escalabilidad de tu negocio y facilitarte el día a día.",
    alternates: {
      canonical: "/proyectos",
    },
    openGraph: {
      title: "Nuestros Proyectos | Codeluxe",
      description:
        "En Codeluxe no solo creamos aplicaciónes webs personalizadas para terceros. También desarrollamos tecnología de alto impacto bajo un modelo de suscripción diseñado para eliminar la fricción técnica, potenciar la escalabilidad de tu negocio y facilitarte el día a día.",
      images: ["https://codeluxe.tech/og-image.png"],
    },
    twitter: {
      title: "Nuestros Proyectos | Codeluxe",
      description:
        "En Codeluxe no solo creamos aplicaciónes webs personalizadas para terceros. También desarrollamos tecnología de alto impacto bajo un modelo de suscripción diseñado para eliminar la fricción técnica, potenciar la escalabilidad de tu negocio y facilitarte el día a día.",
    },
  };
}

const TechLabel = ({ children }) => (
  <span className="text-primary/70 text-xs uppercase tracking-widest mb-2 block">
    {`${children}`}
  </span>
);

const Badge = ({ children }) => {
  return (
    <Link
      href="https://www.linkedin.com/company/codeluxee/"
      aria-label="Linkedin de Codeluxe"
      className="flex items-center mx-auto w-fit"
      target="_blank"
    >
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#83cee5_0%,#1e2e39_50%,#83cee5_100%)]"></span>
        <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer bg-secondary text-white/80 backdrop-blur-3xl whitespace-nowrap">
          {children}
        </div>
      </span>
    </Link>
  );
};

export default function ProyectosPage() {
  return (
    <main className="min-h-screen pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background">
      <section className="max-w-5xl mb-24">
        <Badge>Proyectos Codeluxe</Badge>
        <h1 className="text-4xl text-balance text-center sm:text-5xl font-bold mt-4 mb-8 leading-tight">
          Soluciones de <span className="text-primary">Software</span> que
          impulsan negocios reales.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center text-balance text-secondary-txt leading-tight font-light">
          En Codeluxe no solo creamos aplicaciónes webs personalizadas para
          terceros. También desarrollamos{" "}
          <Highlighted>tecnología de alto impacto</Highlighted> bajo un modelo
          de suscripción diseñado para eliminar la fricción técnica, potenciar
          la escalabilidad de tu negocio y facilitarte el día a día.
        </p>
      </section>

      <section className=" max-w-5xl mx-auto space-y-20">
        {projects.map((project) => (
          <div key={project.id} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

            <div className="relative bg-background/80 backdrop-blur-xl border border-primary/10 p-8 md:p-12 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-2 aspect-video bg-black/50 rounded-xl border border-primary/20 relative overflow-hidden mt-8 lg:mt-0 group">
                {/* Capa de imagen (la oscurecemos un poco más cuando está inactivo para contraste) */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    project.status !== "active"
                      ? "opacity-40 blur-sm grayscale"
                      : "group-hover:scale-105"
                  }`}
                />

                {project.status !== "active" && (
                  // CONTENEDOR 3D "PROXIMAMENTE"
                  <div className="absolute inset-0 grid place-content-center p-8">
                    <div
                      className="
        relative 
        px-10 py-4
        bg-black/80 
        backdrop-blur-md
        border-l-2 border-b-2 border-primary/30 
        /* EFECTO 3D CLAVE: Perspectiva + Rotación Y (derecha) + Rotación X (arriba) + Escala */
        [transform:perspective(800px)_rotateY(15deg)_rotateX(5deg)_scale(0.95)]
        /* SOMBRAS PARA VOLUMEN: Sombra externa fuerte a la izquierda + Sombra interna sutil */
        shadow-[-20px_20px_40px_-5px_rgba(0,0,0,0.9),_inset_0_0_20px_rgba(131,206,229,0.1)]
        transition-transform duration-500 hover:[transform:perspective(800px)_rotateY(18deg)_rotateX(7deg)_scale(0.97)]
      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50"></div>

                      <span className="text-primary font-mono font-bold sm:text-lg tracking-[0.3em] uppercase drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
                        Proximamente...
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary-txt mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-secondary-txt italic border-l-2 border-primary/30 pl-4">
                    {project.tagline}
                  </p>
                </div>

                <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-secondary-txt/80">
                  {project.features.slice(0, 4).map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center before:content-['>'] before:text-primary before:mr-2 before:font-bold"
                    >
                      {/* Accedemos a f.title y limitamos palabras si es necesario */}
                      <span className="truncate">
                        {f.title.split(" ").length > 15
                          ? f.title.split(" ").slice(0, 3).join(" ") + "..."
                          : f.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <TechLabel>Modelo Suscripción</TechLabel>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-primary-txt">
                        ${project.price}
                      </span>
                      <span className="text-secondary-txt text-sm">/mes</span>
                    </div>
                  </div>

                  {project.status === "active" ? (
                    <Link
                      href={`/proyectos/${project.id}`}
                      className="bg-primary/10 hover:bg-primary/20 w-full sm:w-fit text-center text-primary border border-primary/30 px-8 py-3 rounded-lg font-bold transition-all flex justify-center items-center gap-3 group/btn"
                    >
                      Acceder al Sistema
                      <span className="group-hover/btn:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="bg-secondary/20 text-secondary-txt px-8 py-3 rounded-lg w-full sm:w-fit text-sm cursor-not-allowed border border-white/5"
                    >
                      Proximamente...
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
