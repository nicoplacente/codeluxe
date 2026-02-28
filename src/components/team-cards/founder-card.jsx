import Link from "next/link";
import PortfolioButtons from "@/ui/portfolio-button";
import { IconBrandLinkedinFilled } from "@tabler/icons-react";

export default function FounderCard({
  nombre,
  imagen,
  descripcion,
  portfolioHref,
  portfolioAria,
  linkedinHref,
  linkedinAria,
  badgeText,
  badgeGradient,
  inicialBadgeColor,
}) {
  return (
    <article className="relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700">
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`bg-gradient-to-r ${badgeGradient} text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md`}
        >
          {badgeText}
        </span>
      </div>
      <div className="p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img
              className="w-28 h-28 object-cover rounded-full border-4 border-primary/20 shadow-lg"
              src={imagen}
              alt={nombre}
              title={nombre}
            />
            <div
              className={`absolute -bottom-2 -right-2 w-6 h-6 ${inicialBadgeColor} rounded-full flex items-center justify-center`}
            >
              <span className="text-white text-xs font-bold">
                {nombre
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-2xl sm:mt-2 text-white">{nombre}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm">
              {descripcion}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <PortfolioButtons href={portfolioHref} aria={portfolioAria}>
                Ver portfolio
              </PortfolioButtons>
              <Link
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedinAria}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm rounded-xl transition duration-300 gap-2 shadow-md hover:shadow-lg"
              >
                <IconBrandLinkedinFilled />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
