import { Navbar } from "@/app/components/Navbar";
import { Metadata } from "next/types";

export const metadata: Metadata = {
    title: "Home page",
    description: "Home page for demo Next.JS 13",
  };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
