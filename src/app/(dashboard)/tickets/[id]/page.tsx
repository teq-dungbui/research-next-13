import { ITicket } from "@/types/ticket";
import { notFound } from "next/navigation";

export const dynamicParams = true; // default val = true

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  return tickets.map((ticket: ITicket) => ({
    id: ticket.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;

  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const ticket = await res.json();

  return {
    title: `Next.JS 13 | ${ticket.title}`,
    description: ticket.body.slice(0, 100),
  };
}

const getTicket = async (id: string): Promise<ITicket> => {
  // imitate delay
  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
};

export default async function TicketDetails({
  params,
}: {
  params: { id: string };
}) {
  const ticket = await getTicket(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
