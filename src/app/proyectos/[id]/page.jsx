import Highlighted from "@/components/highlighted";
import SubscriptionButton from "@/components/suscription-button";
import { projects } from "@/utils/constants";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Codeluxe",
      robots: "noindex",
    };
  }

  return {
    title: `${project.title} | Codeluxe`,
    description: project.description,
    alternates: {
      canonical: `/proyectos/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Codeluxe`,
      description: project.description,
      images: ["https://codeluxe.tech/og-image.png"],
    },
    twitter: {
      title: `${project.title} | Codeluxe`,
      description: project.description,
    },
  };
}

export default async function ProjectDetail({ params }) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);
  if (!project) return null;

  return (
    <main className="min-h-screen">
      <section>
        <div className="max-w-5xl mx-auto">
          <Link
            href="/proyectos"
            className="hover:text-primary/60 w-fit group text-primary text-base mb-4 flex items-center gap-2 transition-colors"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform">
              ‹
            </span>{" "}
            Volver a los proyectos
          </Link>
          <h1 className="text-4xl text-balance sm:text-5xl font-black text-center text-primary-txt tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-2xl text-center text-balance sm:text-3xl !text-primary leading-relaxed font-medium">
            {project.tagline}
          </p>

          <div className="md:col-span-3 text-secondary-txt leading-relaxed space-y-4">
            <p className="text-center">{project.description}</p>
            {project.id === "gestion-inventarios" && (
              <p className="font-medium text-pretty text-primary-txt border-l-4 border-primary pl-4 bg-primary/5 py-2">
                Dato clave: Sistema actualmente validado y operativo en más de{" "}
                <Highlighted color="text-primary">
                  20 cuarteles de Bomberos en Argentina.
                </Highlighted>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-32 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Left Column: Extensive Info */}
        <div className="lg:col-span-8 space-y-32">
          {/* Business Impact Area */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Impacto Operativo
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="!text-primary text-xl font-bold">
                  Arquitectura de Datos
                </p>
                <p className="text-secondary-txt leading-relaxed italic">
                  Estructura diseñada para la{" "}
                  <Highlighted>integridad de la información</Highlighted>.
                  Reportes en tiempo real y trazabilidad absoluta de cada
                  movimiento dentro del sistema.
                </p>
              </div>
              <div className="space-y-4">
                <p className="!text-primary text-xl font-bold">
                  Soporte Estratégico
                </p>
                <p className="text-secondary-txt leading-relaxed italic">
                  No es solo software. Incluimos{" "}
                  <Highlighted>acompañamiento técnico 24/7</Highlighted> y
                  actualizaciones mensuales sin costo adicional para asegurar la
                  vigencia tecnológica.
                </p>
              </div>
            </div>
          </div>

          <section className="aspect-video rounded-3xl bg-secondary overflow-hidden border border-white/5 shadow-2xl">
            <video
              className="w-full h-full object-cover"
              title={`Video de ${project.title}`}
              controls
              preload="none"
              poster={project.image}
            >
              <source src={project.videoPlaceholder} type="video/webm" />
            </video>
          </section>

          <div className="space-y-16">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Capacidades del Sistema
            </h3>

            <div className="space-y-12 border-l border-white/10 pl-12">
              {project.features.map((feature, i) => (
                <div key={i} className="relative">
                  {/* Indicador de punto con resplandor */}
                  <span className="absolute -left-[53px] top-2 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_#83cee5]" />

                  <div className="space-y-3">
                    <h4 className="text-lg sm:text-xl text-primary font-bold tracking-tight">
                      {feature.title}
                    </h4>

                    <p className="text-secondary-txt max-w-2xl text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-glass p-10 rounded-[2.5rem] border border-primary/20 space-y-10">
            <div>
              <span className="text-primary text-xs uppercase tracking-widest">
                Modelo SaaS
              </span>
              <h4 className="text-5xl font-black text-white mt-2">
                ${project.price}
              </h4>
              <p className="text-secondary-txt mt-1 italic">
                Suscripción mensual todo incluido
              </p>
            </div>

            <ul className="space-y-4 text-sm text-secondary-txt">
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">✦</span> Hosting de alto
                rendimiento incluido
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">✦</span> Copias de seguridad
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <span className="text-primary">✦</span> Actualizaciones de
                seguridad y mantenimiento
              </li>
            </ul>

            <div className="space-y-4 pt-10 border-t border-white/10">
              <div className="text-xs text-secondary-txt/60 leading-relaxed uppercase tracking-tighter">
                ¿Necesitas funcionalidades exclusivas?
                <p className="mt-1 text-white/90 normal-case text-sm">
                  Desarrollamos módulos a medida desde{" "}
                  <Highlighted>${project.customPrice}</Highlighted> + abono
                  mensual.
                </p>
              </div>
              <SubscriptionButton project={project} />
              <div className="flex items-center w-full">
                <div className="flex-1 border-t border-white/20"></div>
                <span className="px-4 text-white text-sm uppercase font-medium">
                  o
                </span>
                <div className="flex-1 border-t border-white/20"></div>
              </div>
              <Link
                href={`https://wa.me/5492926402409?text=${encodeURIComponent(
                  `Hola! Quisiera adquirir el sistema de "${project.title}".`
                )}`}
                target="_blank"
                aria-label="Contactar por Whatsapp para adquirir el servicio"
                className="bg-primary/10 hover:bg-primary/20 text-primary border justify-center border-primary/30 px-8 py-3 rounded-lg font-bold transition-colors flex items-center gap-3"
              >
                Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
