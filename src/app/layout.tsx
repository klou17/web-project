import type { Metadata } from "next";
import "./globals.css"; // These styles apply to every route in the application
import { Nav } from "@/components/Nav";

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
      <body className="bg-gray-100">
        <Nav />
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
