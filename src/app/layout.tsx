import type { Metadata } from "next";
import "./globals.css"; // These styles apply to every route in the application
import { Nav } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Proyecto Votación Web",
  description: "UPNA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
