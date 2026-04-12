import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";

const rotatingMessages = [
  {
    id: 1,
    content: "Apprun: Jeder kann von überall auf der Welt teilnehmen. Man muss nicht vor Ort sein.",
  },
  {
    id: 2,
    content: "Mehr Einblicke und Infos auf Instagram",
    link: "https://www.instagram.com/thomas_sborn/",
    label: "@thomas_sborn",
  },
  {
    id: 3,
    content: "Gemeinsam Laufen, Gehen oder Rollen für die, die es nicht können",
  },
  {
    id: 4,
    content: "Gemeinsam nehmen wir am \"Wings for life World Run\" teil und laufen für die Heilung von Querschnittlähmung",
  },
  {
    id: 5,
    content: "Tu was Gutes und sei dabei.",
  },
  {
    id: 6,
    content: "100% der Startgebühr und Spenden gehen in die Forschung.",
  },
  {
    id: 7,
    content: "Weltweit laufen Tausende Menschen gleichzeitig los. In Deutschland um 13 Uhr am 10. Mai 2026. In anderen Zeitzonen entsprechend früher oder später.",
  },
  {
    id: 8,
    content: "Du möchtest oder kannst nicht Laufen? Dann spende gerne eine kleine Summe. Dafür gerne eine Email an ",
    email: "wfl_tower@t-online.de",
    instagramText: " oder über Instagram an ",
    instagramLink: "https://www.instagram.com/thomas_sborn/",
    instagramLabel: "@thomas_sborn",
  },
];

export function Hero() {
  const [daysUntilStart, setDaysUntilStart] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2026-05-10");
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysUntilStart(diffDays);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTextIndex((current: number) => (current + 1) % rotatingMessages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const activeMessage = rotatingMessages[activeTextIndex];

  return (
    <section className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#003056] to-[#002040] text-white px-4 pt-16 pb-12">
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-5xl text-center">
          <div className="mb-6">
            <img
              src="https://img.redbull.com/images/e_trim:10:transparent/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2014/04/29/1331648035613_4/wings-for-life-world-run-logo-large"
              alt="Wings for Life World Run"
              className="h-20 md:h-28 mx-auto"
            />
          </div>

          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-bold text-[#E2004C] mb-2">10.05.2026 • 13:00 Uhr</p>
            <p className="text-base md:text-lg text-white/90">{daysUntilStart} Tage bis zum Start!</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tower & Friends</h1>

          <div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm transition-all duration-700">
            <p className="text-base sm:text-lg md:text-xl leading-8 text-white/90">
              {activeMessage.email || activeMessage.instagramLink ? (
                <>
                  {activeMessage.content}
                  {activeMessage.email && (
                    <a
                      href={`mailto:${activeMessage.email}`}
                      className="font-semibold text-white underline transition-colors duration-200 hover:text-[#E2004C]"
                    >
                      {activeMessage.email}
                    </a>
                  )}
                  {activeMessage.instagramLink && (
                    <>
                      {activeMessage.instagramText}
                      <a
                        href={activeMessage.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-white underline transition-colors duration-200 hover:text-[#E2004C]"
                      >
                        <Instagram className="h-5 w-5" />
                        {activeMessage.instagramLabel}
                      </a>
                    </>
                  )}
                </>
              ) : activeMessage.link ? (
                <>
                  {activeMessage.content} <a
                    href={activeMessage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-white underline transition-colors duration-200 hover:text-[#E2004C]"
                  >
                    <Instagram className="h-5 w-5" />
                    {activeMessage.label}
                  </a>
                </>
              ) : (
                activeMessage.content
              )}
            </p>
          </div>
        </div>

        <div className="w-full max-w-5xl flex flex-col items-center">
          <a
            href="https://www.wingsforlifeworldrun.com/de/teams/5dpLP5?join=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E2004C] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#C20041] transition-all hover:scale-105 shadow-2xl"
          >
            Jetzt dem Team beitreten! 🏃‍♂️
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <span className="text-sm uppercase tracking-[0.4em] text-white/70">Weiter scrollen</span>
        <div className="flex space-x-2 animate-bounce">
            {[...Array(3)].map((_, index) => (
              <svg
                key={index}
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
            ))}
          </div>
        </div>
    </section>
  );
}
