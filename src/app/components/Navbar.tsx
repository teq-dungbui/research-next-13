import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <h1>Next.JS 13</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
};
