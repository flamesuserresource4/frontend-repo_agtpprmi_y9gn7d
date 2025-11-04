import React from 'react';

const doctors = [
  {
    name: 'Dr. Maya Patel',
    role: 'Cardiologist',
    img: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dr. Ethan Chen',
    role: 'Emergency Medicine',
    img: 'https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Dr. Sofia Rivera',
    role: 'Family Physician',
    img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Meet Our Experts</h2>
          <p className="text-slate-600 mt-2">A team of board‑certified physicians committed to your wellbeing.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => (
            <article key={doc.name} className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={doc.img} alt={doc.name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{doc.name}</h3>
                <p className="text-slate-600">{doc.role}</p>
                <button className="mt-4 inline-flex rounded-md bg-blue-500 px-4 py-2 text-white text-sm font-medium hover:bg-blue-600 transition">
                  Book with {doc.name.split(' ')[1]}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
