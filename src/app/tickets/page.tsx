import { Metadata } from "next/types";
import { TicketList } from "./TicketList";
import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tickets page",
  description: "Tickets page for demo Next.JS 13",
};

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
