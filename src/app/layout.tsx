import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReserveFlow",
  description:
    "A flexible appointment and booking management system for service-based businesses.",
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