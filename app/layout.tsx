import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/shared/ThemeProvider";

export const metadata: Metadata = {
  title: "AZF - Tecnologia e Inovação | Agência de IA & TI",
  description:
    "Transformamos negócios com inteligência artificial e soluções tecnológicas de ponta. Agência especializada em AI, Machine Learning, Desenvolvimento Web e Cloud Computing.",
  keywords: [
    "AZF",
    "Inteligência Artificial",
    "Tecnologia da Informação",
    "Machine Learning",
    "Desenvolvimento Web",
    "Cloud Computing",
    "Angola",
    "Luanda",
  ],
  openGraph: {
    title: "AZF - Tecnologia e Inovação",
    description:
      "Impulsionamos o seu negócio com soluções de IA e Tecnologia da Informação de última geração.",
    type: "website",
    locale: "pt_AO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body className="font-body antialiased transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
