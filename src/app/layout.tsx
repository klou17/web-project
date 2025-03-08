import type { Metadata } from "next";
import "./globals.css"; // These styles apply to every route in the application

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
      <body>{children}</body>
    </html>
  );
}
