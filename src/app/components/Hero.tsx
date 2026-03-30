import { useState, useEffect } from "react";

export function Hero() {
  const [daysUntilStart, setDaysUntilStart] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2026-05-10');
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysUntilStart(diffDays);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#003056] to-[#002040] text-white px-4">
      <div className="text-center mb-8">
        <div className="mb-6">
          <img
            src="https://img.redbull.com/images/e_trim:10:transparent/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2014/04/29/1331648035613_4/wings-for-life-world-run-logo-large"
            alt="Wings for Life World Run"
            className="h-24 md:h-32 mx-auto"
          />
        </div>

        {/* Datum zwischen Logo und Team-Name */}
        <div className="mb-4">
          <p className="text-2xl md:text-3xl font-bold text-[#E2004C] mb-2">10.05.2026 • 13:00 Uhr</p>
          <p className="text-lg md:text-xl text-white/90">{daysUntilStart} Tage bis zum Start!</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">Tower & Friends</h1>
        <p className="text-xl md:text-2xl opacity-90">Gemeinsam nehmen wir am "Wings for life World Run" teil und laufen für die Heilung von Querschnittlähmung</p>
      </div>

      {/* Datum Banner ganz oben - entfernt */}
      {/* <div className="absolute top-8 bg-[#E2004C] px-8 py-3 rounded-full shadow-lg">
        <p className="font-bold text-lg md:text-xl">10.05.2026 • 13:00 Uhr</p>
      </div> */}

      <div className="mt-8">
        <a
          href="https://www.wingsforlifeworldrun.com/de/teams/5dpLP5?join=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#E2004C] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#C20041] transition-all hover:scale-105 shadow-2xl"
        >
          Jetzt dem Team beitreten! 🏃‍♂️
        </a>
      </div>

      <div className="absolute bottom-8">
        <div className="animate-bounce flex space-x-2">
        <a>weiter scrollen</a>
        </div>
        <div className="animate-bounce flex space-x-2">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
