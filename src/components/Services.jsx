import React from 'react';
import { HeartPulse, Stethoscope, Ambulance, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: HeartPulse,
    title: 'Cardiology',
    desc: 'Advanced heart screenings, diagnostics and minimally invasive procedures.',
  },
  {
    icon: Stethoscope,
    title: 'Primary Care',
    desc: 'Same-day visits, wellness exams, and preventive care for all ages.',
  },
  {
    icon: Ambulance,
    title: 'Emergency',
    desc: '24/7 emergency department staffed by certified trauma specialists.',
  },
  {
    icon: ShieldCheck,
    title: 'Remote Monitoring',
    desc: 'Secure, at-home monitoring devices connected to your care team.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="md:flex md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Our Medical Services</h2>
            <p className="text-slate-600 mt-2 max-w-prose">
              Comprehensive care delivered by specialists using state‑of‑the‑art technology.
            </p>
          </div>
          <a href="#doctors" className="inline-flex mt-6 md:mt-0 items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition">
            Find a Doctor
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
