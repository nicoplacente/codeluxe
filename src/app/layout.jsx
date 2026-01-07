import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/page-sections/header";
import Footer from "@/page-sections/footer";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: "Codeluxe",
  description:
    "En Codeluxe creamos sitios web y aplicaciones modernas, rápidas y seguras para negocios y emprendedores. Desarrollo a medida con tecnologías actuales.",
  icons: {
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  keywords: [
    "desarrollo web",
    "sitios web personalizados",
    "Next.js",
    "Strapi",
    "aplicaciones web",
    "freelancer",
    "diseño web",
    "Codeluxe",
    "web moderna",
    "landing page",
    "ecommerce",
    "tienda online",
    "auditoria web gratuita",
    "seguridad web",
    "optimización web",
    "desarrollo a medida",
    "desarrollo freelance",
  ],
  metadataBase: new URL("https://codeluxe.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Codeluxe",
    description:
      "Codeluxe crea sitios web y aplicaciones modernas, rápidas y seguras para negocios y emprendedores. Desarrollo a medida con tecnologías actuales.",
    url: "https://codeluxe.tech",
    siteName: "Codeluxe",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://codeluxe.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codeluxe - Desarrollo Web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Codeluxe",
    description:
      "Codeluxe crea sitios web y aplicaciones modernas, rápidas y seguras para negocios y emprendedores. Desarrollo a medida con tecnologías actuales.",
    images: ["https://codeluxe.tech/og-image.png"],
  },

  authors: [{ name: "Codeluxe", url: "https://codeluxe.tech" }],
  creator: "Codeluxe",

  category: "technology",
};

export const viewport = {
  themeColor: "#080c11",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased`}>
        <Toaster richColors closeButton />
        <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#fff1_1px,transparent_1px),linear-gradient(to_bottom,#fff1_1px,transparent_1px)] bg-[size:7rem_12rem]"></div>
        <Header />
        <main className="max-w-5xl w-full mx-auto my-12 flex justify-center flex-col gap-12 px-4 lg:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
