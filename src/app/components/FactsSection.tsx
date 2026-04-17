import { Heart, Globe, Clock, Smartphone, Target, TrendingUp, DollarSign, Instagram } from "lucide-react";

type Fact = {
  icon: typeof Heart;
  title: string;
  content: string;
  email?: string;
  instagramText?: string;
  instagramLink?: string;
  instagramLabel?: string;
};

const facts: Fact[] = [
  {
    icon: Heart,
    title: "100% für die Forschung",
    content: "Jeder gespendete Euro fließt direkt in die Forschung zur Heilung von Querschnittlähmung",
  },
  {
    icon: Globe,
    title: "Weltweites Event",
    content: "Der Lauf findet weltweit zur gleichen Zeit statt - in Deutschland um 13:00 Uhr",
  },
  {
    icon: Clock,
    title: "Das Catcher Car",
    content: "Startet 30 Minuten nach dir und wird immer schneller - es holt jeden ein!",
  },
  {
    icon: Smartphone,
    title: "App erforderlich",
    content: "Die offizielle App trackt deinen Lauf und kommentiert live - ohne App keine Teilnahme",
  },
  {
    icon: Target,
    title: "Jeder Meter zählt",
    content: "Egal ob 5 km oder 50 km - jeder Laufmeter setzt ein Zeichen",
  },
  {
    icon: TrendingUp,
    title: "Unser Team Impact 2025",
    content: "Team Tower & Friends hatte 2025 unglaubliche 55 aktive Läufer (über 100 Mitglieder) und über 3.000 € Spenden gesammelt!",
  },
  {
    icon: TrendingUp,
    title: "weltweiter Impact 2025",
    content: "310.719 Teilnehmer weltweit sammelten insgesamt 8,6 Millionen Euro für die Rückenmarksforschung!",
  },
  {
    icon: DollarSign,
    title: "Spenden statt Laufen?",
    content: "Du kannst nicht laufen? Kein Problem! Unterstütze uns finanziell.",
    email: "wfl_tower@t-online.de",
    instagramText: " oder auf Instagram an ",
    instagramLink: "https://www.instagram.com/thomas_sborn/",
    instagramLabel: "@thomas_sborn",
  },
  {
    icon: Target,
    title: "privates Event",
    content: "Jeder Teilnehmer nimmt auf eigene Gefahr am \" Wings for Life World Run\" teil. Unser Team trifft sich nur, um privat zusammen zu laufen und Spaß zu haben. Dies ist kein offizielles Event!",
  },
];

const renderFactContent = (fact: Fact) => {
  if (fact.email || fact.instagramLink) {
    return (
      <>
        {fact.content}{" "}
        {fact.email && (
          <a
            href={`mailto:${fact.email}`}
            className="font-semibold text-[#E2004C] hover:text-[#C20041] underline transition-colors"
          >
            {fact.email}
          </a>
        )}
        {fact.instagramLink && (
          <>
            {fact.instagramText}
            <a
              href={fact.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#E2004C] hover:text-[#C20041] underline transition-colors"
            >
              <Instagram className="w-4 h-4" />
              {fact.instagramLabel}
            </a>
          </>
        )}
      </>
    );
  }

  return fact.content;
};


export function FactsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Wings for Life World Run
        </h2>
        <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Ein Lauf, bei dem 100% deiner Startgebühr in die Rückenmarksforschung fließt
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#003056]/10 hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#E2004C]/10 p-3 rounded-lg">
                  <fact.icon className="w-8 h-8 text-[#E2004C]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#003056]">{fact.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {renderFactContent(fact)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
