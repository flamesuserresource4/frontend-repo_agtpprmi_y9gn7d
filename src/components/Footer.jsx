import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-white text-lg font-semibold">BlueLine Health</h4>
          <p className="mt-2 text-slate-400 text-sm max-w-sm">
            Compassionate care backed by cutting‑edge technology. Your trusted partner in health.
          </p>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Contact</h5>
          <ul className="space-y-1 text-sm">
            <li>24/7 Phone: (800) 555‑0123</li>
            <li>Email: care@blueline.health</li>
            <li>123 Health Ave, Wellness City</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium mb-2">Hours</h5>
          <ul className="space-y-1 text-sm">
            <li>Emergency: Open 24/7</li>
            <li>Outpatient: Mon–Sat, 8:00–18:00</li>
            <li>Pharmacy: Mon–Sun, 8:00–21:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} BlueLine Health. All rights reserved.
      </div>
    </footer>
  );
}
