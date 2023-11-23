import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Navbar } from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page for demo Next.JS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
