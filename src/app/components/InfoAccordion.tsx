import { useState } from "react";

export function InfoAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left text-2xl md:text-3xl font-bold text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center justify-between"
        >
          Mehr Infos über den Wings for Life World Run
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        {isOpen && (
          <div className="mt-6 text-gray-800 leading-relaxed space-y-4">
            <p className="text-lg">
              🏃‍♂️ <strong>Was ist der Wings for Life World Run?</strong><br />
              Der Wings for Life World Run ist ein weltweit synchron stattfindender Lauf, bei dem alle Teilnehmer zur selben Zeit starten, egal in welchem Land sie sich befinden.<br />
              Das Besondere: Es gibt keine feste Distanz und keine Ziellinie. Stattdessen läuft man so weit, wie man kann – bis das Catcher Car einen einholt.<br />
              Beim App-Run wird die Aktivität über eine App auf dem Handy getrackt. Ohne App, ist keine Teilnahme möglich! Daher kann jeder von überall auf der Welt teilnehmen. Auch Teammitglieder müssen nicht vor Ort sein.
            </p>
            <p className="text-lg">
              🚗 <strong>Das Catcher Car – die mobile Ziellinie</strong><br />
              - Startet 30 Minuten nach dem offiziellen Laufstart.<br />
              - Beginnt langsam und erhöht kontinuierlich die Geschwindigkeit.<br />
              - Sobald es dich überholt, ist dein persönlicher Lauf beendet.<br />
              - Dadurch hat jeder Teilnehmer sein eigenes Ziel – abhängig von Tempo und Ausdauer.
            </p>
            <p className="text-lg">
              🌍 <strong>Wer kann teilnehmen?</strong><br />
              Der Lauf ist für alle offen:<br />
              - Hobbyläufer<br />
              - Profis<br />
              - Rollstuhlfahrer<br />
              - Walker<br />
              - Komplette Anfänger<br />
              Alle starten gemeinsam und werden gleich behandelt – das macht das Event besonders inklusiv.
            </p>
            <p className="text-lg">
              🧭 <strong>Wie funktioniert das Rennen genau?</strong><br />
              <strong>Start</strong><br />
              - Weltweiter Start zur gleichen Uhrzeit (Deutschland 10.05. 13 Uhr).<br />
              - Du läufst, gehst oder rollst in deinem eigenen Tempo.<br />
              <strong>30 Minuten später</strong><br />
              - Das Catcher Car setzt sich in Bewegung.<br />
              <strong>Während des Rennens</strong><br />
              - Du versuchst, <strong>so weit wie möglich zu kommen</strong>, bevor das Auto dich einholt.<br />
              <strong>Ende</strong><br />
              - Sobald das Catcher Car dich erreicht, ist dein Lauf vorbei. Vor Ort im optimalen Fall wieder am Start!<br />
              - Deine Distanz wird automatisch erfasst.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}