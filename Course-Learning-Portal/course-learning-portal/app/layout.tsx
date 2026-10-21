import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnSpace | Course Learning Portal",
  description: "Explore courses, topics and lessons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}