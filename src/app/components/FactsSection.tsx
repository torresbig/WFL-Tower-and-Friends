import { motion } from "motion/react";
import { Heart, Globe, Clock, Smartphone, Target, TrendingUp } from "lucide-react";

const facts = [
  {
    icon: Heart,
    title: "100% für die Forschung",
    description: "Jeder gespendete Euro fließt direkt in die Forschung zur Heilung von Querschnittlähmung",
  },
  {
    icon: Globe,
    title: "Weltweites Event",
    description: "Der Lauf findet weltweit zur gleichen Zeit statt - in Deutschland um 13:00 Uhr",
  },
  {
    icon: Clock,
    title: "Das Catcher Car",
    description: "Startet 30 Minuten nach dir und wird immer schneller - es holt jeden ein!",
  },
  {
    icon: Smartphone,
    title: "App erforderlich",
    description: "Die offizielle App trackt deinen Lauf und kommentiert live - ohne App keine Teilnahme",
  },
  {
    icon: Target,
    title: "Jeder Meter zählt",
    description: "Egal ob 5 km oder 50 km - jeder Laufmeter setzt ein Zeichen",
  },
  {
    icon: TrendingUp,
    title: "Unser Impact 2025",
    description: "55 aktive Läufer und über 2.000 € Spenden - gemeinsam sind wir stark!",
  },
];

export function FactsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
        >
          Wings for Life World Run
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Ein Lauf, bei dem 100% deiner Startgebühr in die Rückenmarksforschung fließt
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border-2 border-[#003056]/10"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#E2004C]/10 p-3 rounded-lg">
                  <fact.icon className="w-8 h-8 text-[#E2004C]" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#003056]">{fact.title}</h3>
              <p className="text-gray-600 leading-relaxed">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}