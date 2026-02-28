import Link from "next/link";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";

export default function TeamMemberCard({ nombre, imagen, rol, linkedinHref }) {
  return (
    <article className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-700 hover:border-primary/30">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            className="w-16 h-16 object-cover rounded-full border-2 border-gray-600"
            src={imagen}
            alt={nombre}
            title={nombre}
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {nombre
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white">{nombre}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{rol}</p>
          <Link
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${nombre}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium gap-1 transition-colors"
          >
            <IconBrandLinkedinFilled />
            LinkedIn
          </Link>
        </div>
      </div>
    </article>
  );
}
