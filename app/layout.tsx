import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Senja",
  description: "Teman Ngopi di Setiap Cerita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="bg-amber-50 text-amber-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}