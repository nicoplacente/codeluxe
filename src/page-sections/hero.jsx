import Image from "next/image";

export default function Hero() {
  return (
    <main className="flex items-center gap-20 flex-col md:flex-row p-6 min-h-[65vh]">
      <Image
        src="/logo-codeluxe.webp"
        width={300}
        height={300}
        alt="Logo Codeluxe"
        className="rounded-xl [box-shadow:0_0_100px_#1e2e39]"
      />
      <div className="flex flex-col gap-6">
        <blockquote className="pl-6 border-l-4 border-primary text-pretty text-white/90 italic text-2xl font-light">
          “Tu web no es solo estética. Es tu vendedor 24/7.”
        </blockquote>
        <blockquote className="pl-6 border-l-4 border-secondary text-white/90 italic text-2xl font-light">
          “No hacemos páginas. Creamos soluciones para crecer.”
        </blockquote>
      </div>
    </main>
  );
}
