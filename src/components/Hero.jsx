import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-400/30">
            Advanced Care • Human Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Your Health, Powered by Technology
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-prose">
            Experience modern, patient-first healthcare. From same‑day appointments to remote monitoring, we bring world‑class medicine closer to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition"
            >
              Explore Services
            </a>
            <a
              href="#doctors"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-white font-medium ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              Meet Our Doctors
            </a>
          </div>
        </div>

        <div className="hidden md:flex md:justify-end">
          <div className="rounded-2xl backdrop-blur-sm bg-white/5 ring-1 ring-white/10 p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Book an Appointment</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-md bg-white/10 px-4 py-2.5 text-white placeholder-slate-300/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md bg-white/10 px-4 py-2.5 text-white placeholder-slate-300/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                className="w-full rounded-md bg-white/10 px-4 py-2.5 text-white placeholder-slate-300/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 px-4 py-2.5 font-medium hover:bg-blue-600 transition"
                aria-label="Submit appointment request"
              >
                Request Appointment
              </button>
              <p className="text-xs text-slate-300/80">
                We will contact you to confirm your appointment time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
