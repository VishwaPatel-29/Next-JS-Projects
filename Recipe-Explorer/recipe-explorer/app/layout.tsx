import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Explorer",
  description: "Discover simple and delicious recipes",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-orange-50 text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}