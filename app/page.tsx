"use client";

import { useEffect, useState } from "react";

export default function Home() {
  interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
  }

  const [data, setData] = useState<Event[] | null>(null);

  useEffect(() => {
    fetch('https://dev-api.sportingglobe.com.au/api/v1/whatsons?location=Robina')
    .then((res) => {
      if(!res.ok) {
        throw new Error('error fetching');
      }
      return res.json();
    })
    .then((data: Event[]) => {
      setData(data);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data && data.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.date}</p>
        </div>
      ))}
    </main>
  );
}
