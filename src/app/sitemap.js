import { projects } from "@/utils/constants";

export default function sitemap() {
  const baseUrl = "https://codeluxe.tech";

  const staticRoutes = [
    "",
    "/auditoria/",
    "/propuesta/",
    "/proyectos/",
    "/terminos/",
    "/info/",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productRoutes = projects.map((project) => ({
    url: `${baseUrl}/productos/${project.id}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
