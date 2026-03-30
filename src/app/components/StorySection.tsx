import { Users, MapPin, Calendar, PartyPopper } from "lucide-react";

export function StorySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#003056]">
            Die Geschichte von Tower & Friends
          </h2>
          <div className="w-24 h-1 bg-[#E2004C] mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-gray-700 mb-6">
              <strong className="text-[#E2004C]">Hallo, ich bin Thomas</strong> – seit 2015 durch einen Motorradunfall querschnittgelähmt. 
              Aber das hat mich nicht gestoppt, sondern zu einer neuen Mission geführt.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              <strong>2021</strong> startete ich mit nur einer Handvoll Leute beim Wings for Life World Run. 
              Heute, nur wenige Jahre später, sind wir eine <strong className="text-[#E2004C]">Familie von über 100 Mitgliedern</strong>!
            </p>

            <div className="bg-[#E2004C]/10 border-l-4 border-[#E2004C] p-6 my-8">
              <p className="text-lg font-semibold text-gray-900">
                2025: 55 aktive Läufer · Über 3.000 € Spenden · 100% für die Forschung
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Jeder gespendete Euro fließt direkt in die <strong>Forschung zur Heilung von Querschnittlähmung</strong>. 
              Das ist nicht nur ein Lauf – das ist Hoffnung in Bewegung.
            </p>
          </div>
        </div>

        {/* Unser Treffpunkt */}
        <div className="bg-gradient-to-br from-[#003056] to-[#002040] rounded-2xl shadow-xl p-8 md:p-12 text-white mb-12">
          <div className="flex items-center mb-6">
            <MapPin className="w-10 h-10 mr-4" />
            <h3 className="text-3xl font-bold">Unser Treffpunkt</h3>
          </div>
          
          <p className="text-lg leading-relaxed mb-6">
            Jedes Jahr treffen wir uns in <strong>Simmern (Hunsrück)</strong> auf dem Schinderhannesradweg. 
            Hier starten wir gemeinsam unseren fantastischen Lauf!
          </p>

            <div className="mt-8">
    <h4 className="text-white font-bold mb-4">Hier findest du uns:</h4>
    <div className="rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
      <iframe
        width="100%"
        height="350"
        src="https://maps.google.com/maps?q=49.9783951,7.5110275&t=&z=16&ie=UTF8&iwloc=&output=embed"
        className="grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
      ></iframe>
    </div>
    <a 
      href="https://www.google.com/maps/dir/?api=1&destination=49.9783951,7.5110275"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-[#E2004C] hover:underline font-medium"
    >
      → Route mit Google Maps planen
    </a>
  </div>

          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <h4 className="text-xl font-bold mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-3" />
              Die perfekte Strategie
            </h4>
            <p className="text-lg leading-relaxed">
              Die Strecke ist clever gewählt: Nach ungefähr der Hälfte deiner geplanten Distanz 
              drehst du um und läufst zurück zum Start. Im Idealfall wirst du dort vom Catcher Car eingeholt. 
              So bleiben wir alle zusammen und können anschließend gemeinsam durchatmen, quatschen und snacken!
            </p>
          </div>
        </div>

        {/* After Party */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-6">
            <PartyPopper className="w-10 h-10 mr-4 text-[#E2004C]" />
            <h3 className="text-3xl font-bold text-[#003056]">After-Run Celebration 2026</h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Wie jedes Jahr wird's besonders cool: Nach dem Lauf treffen wir uns am <strong className="text-[#E2004C]">Simmersee </strong> 
            zum gemeinsamen Grillen, Feiern und Genießen!
          </p>

          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-lg text-gray-700 mb-3">
              🍖 Grill wird organisiert<br />
              🍺 Ein paar Getränke werden gesponsert<br />
              🎒 Bring gerne was mit, wenn du kannst – gemeinsam schmeckt's besser!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
