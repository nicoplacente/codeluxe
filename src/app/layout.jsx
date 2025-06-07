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
    "Codeluxe crea sitios web y aplicaciones modernas, rápidas y seguras para negocios y emprendedores. Desarrollo a medida con tecnologías actuales.",
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
  ],
  metadataBase: new URL("https://codeluxe.vercel.app"),
  openGraph: {
    title: "Codeluxe",
    description:
      "Codeluxe crea sitios web y aplicaciones modernas, rápidas y seguras para negocios y emprendedores. Desarrollo a medida con tecnologías actuales.",
    url: "https://codeluxe.vercel.app",
    siteName: "Codeluxe",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/logo-codeluxe.webp",
        width: 630,
        height: 630,
        alt: "Codeluxe - Desarrollo Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeluxe",
    description:
      "Desarrollo de sitios y aplicaciones web modernas, rápidas y seguras para emprendedores y negocios.",
    images: ["/logo-codeluxe.webp"],
  },
  authors: [{ name: "Codeluxe", url: "https://codeluxe.vercel.app" }],
  creator: "Codeluxe",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
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
        <main className="max-w-4xl w-full mx-auto my-12 flex justify-center flex-col gap-9 px-4 lg:px-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
