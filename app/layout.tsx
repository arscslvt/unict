import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Studenti | Università di Catania",
  description:
    "Ei ciao 👋, questo è un mockup su come rifarei l'interfaccia del portale studenti dell'Università di Catania. Un progetto di Salvatore Aresco. [Sito web a scopo illustrativo]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
